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
  const [competitorUrl, setCompetitorUrl] = React.useState('');
  const [userUrl, setUserUrl] = React.useState('');
  const [report, setReport] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!competitorUrl.trim() || !userUrl.trim()) return;

    setIsLoading(true);
    setReport('');

    try {
      const result = await competitiveIntelligenceAgent({ competitorUrl, userUrl });
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
            <CardTitle>Comparative Analysis</CardTitle>
            <CardDescription>
                Enter your URL and a competitor's URL to generate a comparative analysis.
            </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
             <div className="grid md:grid-cols-2 gap-4">
                <Input
                    placeholder="Competitor URL (e.g., https://competitor.com)"
                    value={competitorUrl}
                    onChange={(e) => setCompetitorUrl(e.target.value)}
                    disabled={isLoading}
                    type="url"
                    required
                />
                <Input
                    placeholder="Your URL (e.g., https://yoursite.com)"
                    value={userUrl}
                    onChange={(e) => setUserUrl(e.target.value)}
                    disabled={isLoading}
                    type="url"
                    required
                />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading || !competitorUrl.trim() || !userUrl.trim()}>
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
                    <span className="font-headline">Comparative Intelligence Report</span>
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
