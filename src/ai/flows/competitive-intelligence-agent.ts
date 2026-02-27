'use server';
/**
 * @fileOverview This file implements a Genkit flow for a Senior Competitive Intelligence Agent.
 *
 * - competitiveIntelligenceAgent - A function that generates a deep-dive report on a given company.
 * - CompetitiveIntelligenceAgentInput - The input type for the competitiveIntelligenceAgent function.
 * - CompetitiveIntelligenceAgentOutput - The return type for the competitiveIntelligenceAgent function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const runtime = 'edge';

const CompetitiveIntelligenceAgentInputSchema = z.object({
  competitorUrl: z.string().url().describe("The URL of the competitor's website."),
  userUrl: z.string().url().describe('The URL of your website or any other URL to compare against.'),
});
export type CompetitiveIntelligenceAgentInput = z.infer<
  typeof CompetitiveIntelligenceAgentInputSchema
>;

const CompetitiveIntelligenceAgentOutputSchema = z.object({
  report: z.string().describe('A structured competitive intelligence report in HTML format.'),
});
export type CompetitiveIntelligenceAgentOutput = z.infer<
  typeof CompetitiveIntelligenceAgentOutputSchema
>;

export async function competitiveIntelligenceAgent(
  input: CompetitiveIntelligenceAgentInput
): Promise<CompetitiveIntelligenceAgentOutput> {
  return competitiveIntelligenceAgentFlow(input);
}

const competitiveIntelligenceAgentPrompt = ai.definePrompt({
  name: 'competitiveIntelligenceAgentPrompt',
  input: { schema: CompetitiveIntelligenceAgentInputSchema },
  output: { schema: CompetitiveIntelligenceAgentOutputSchema },
  prompt: `Compare these two websites side-by-side:
1. Competitor: {{{competitorUrl}}}
2. Reference: {{{userUrl}}}

Provide a report on value proposition, marketing focus, and opportunities. Output in HTML.`,
});

const competitiveIntelligenceAgentFlow = ai.defineFlow(
  {
    name: 'competitiveIntelligenceAgentFlow',
    inputSchema: CompetitiveIntelligenceAgentInputSchema,
    outputSchema: CompetitiveIntelligenceAgentOutputSchema,
  },
  async (input) => {
    const { output } = await competitiveIntelligenceAgentPrompt(input);
    return output!;
  }
);
