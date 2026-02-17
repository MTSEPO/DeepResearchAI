'use client';

import * as React from 'react';
import { Sparkles, LoaderCircle, Bot } from 'lucide-react';
import { competitiveIntelligenceAgent } from '@/ai/flows/competitive-intelligence-agent';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { Separator } from './ui/separator';

export function IntelligenceAgentForm() {
  const [companyName, setCompanyName] = React.useState('');
  const [report, setReport] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!companyName.trim()) return;

    setIsLoading(true);
    setReport('');

    try {
      const result = await competitiveIntelligenceAgent({ companyName });
      setReport(result.report);
    } catch (error) {
      console.error('Error generating report:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate report. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
            <CardTitle>Company Analysis</CardTitle>
            <CardDescription>
                Enter a company name to generate a deep-dive competitive intelligence report.
            </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Input
              placeholder="e.g. 'Salesforce' or 'Microsoft'"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              disabled={isLoading}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading || !companyName.trim()}>
              {isLoading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Report
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      {isLoading && (
        <div className="mt-8">
            <Separator className="my-4"/>
            <div className="space-y-4 text-center py-10">
                <LoaderCircle className="mx-auto h-12 w-12 animate-spin text-primary" />
                <h3 className="text-xl font-semibold">Generating your report...</h3>
                <p className="text-muted-foreground">The AI agent is gathering intelligence. This can take up to a minute.</p>
            </div>
        </div>
      )}

      {report && (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bot className="w-6 h-6 text-primary" />
                    <span className="font-headline">Intelligence Report for {companyName}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="prose dark:prose-invert max-w-full" dangerouslySetInnerHTML={{ __html: report }} />
            </CardContent>
        </Card>
      )}
    </>
  );
}
