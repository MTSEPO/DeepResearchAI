'use client';

import * as React from 'react';
import { z } from 'zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LoaderCircle, Plus, Sparkles, Trash2 } from 'lucide-react';
import { MarketGapAnalysisReportOutput } from '@/ai/flows/market-gap-analysis-report';
import { useToast } from '@/hooks/use-toast';
import { MarketGapReport } from './market-gap-report';
import { Separator } from './ui/separator';

const companyInfoSchema = z.object({
  name: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  desc: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
});

const formSchema = z.object({
  userCompany: companyInfoSchema,
  competitors: z.array(companyInfoSchema).min(1, { message: 'Please add at least one competitor.' }),
});

export function MarketGapAnalysisForm() {
  const [report, setReport] = React.useState<MarketGapAnalysisReportOutput | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userCompany: { name: '', desc: '' },
      competitors: [{ name: '', desc: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'competitors',
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setReport(null);
    try {
      const response = await fetch('/api/market-gap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate report');
      }

      const result = await response.json();
      setReport(result);
    } catch (error: any) {
      console.error('Error generating report:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to generate report. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Your Company</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="userCompany.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your awesome company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userCompany.desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product/Service Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe what your company offers..." {...field} />
                    </FormControl>
                    <FormDescription>Be as detailed as possible for the best results.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Competitors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {fields.map((field, index) => (
                <div key={field.id} className="p-4 border rounded-lg relative">
                  <h4 className="font-semibold mb-4">Competitor {index + 1}</h4>
                   <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name={`competitors.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder={`Competitor #${index+1} name`} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`competitors.${index}.desc`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product/Service Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe their product or service" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => append({ name: '', desc: '' })}
              >
                <Plus className="mr-2 h-4 w-4" /> Add Competitor
              </Button>
            </CardContent>
          </Card>

          <Button type="submit" size="lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Market...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Report
              </>
            )}
          </Button>
        </form>
      </Form>
      
      {isLoading && (
        <div className="mt-8">
            <Separator className="my-4"/>
            <div className="space-y-4 text-center py-10">
                <LoaderCircle className="mx-auto h-12 w-12 animate-spin text-primary" />
                <h3 className="text-xl font-semibold">Generating your report...</h3>
                <p className="text-muted-foreground">The AI is analyzing the market. This may take a moment.</p>
            </div>
        </div>
      )}

      {report && (
        <div className="mt-8">
            <Separator className="my-4"/>
            <MarketGapReport report={report} />
        </div>
        )}
    </>
  );
}
