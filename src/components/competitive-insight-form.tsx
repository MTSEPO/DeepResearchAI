'use client';

import * as React from 'react';
import { Sparkles, LoaderCircle } from 'lucide-react';
import { Button } from './ui/button';
import { CardContent, CardFooter } from './ui/card';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function CompetitiveInsightForm() {
  const [question, setQuestion] = React.useState('');
  const [insight, setInsight] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setInsight('');

    try {
      const response = await fetch('/api/competitive-insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate insight');
      }

      const result = await response.json();
      setInsight(result.insight);
    } catch (error: any) {
      console.error('Error generating insight:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to generate insight. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Ask your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          disabled={isLoading}
        />
        {insight && (
          <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle className="font-headline">AI Insight</AlertTitle>
            <AlertDescription className="whitespace-pre-wrap">
              {insight}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button type="submit" disabled={isLoading || !question.trim()}>
          {isLoading ? (
            <>
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Insight
            </>
          )}
        </Button>
      </CardFooter>
    </form>
  );
}
