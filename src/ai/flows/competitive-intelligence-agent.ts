'use server';
/**
 * @fileOverview High-speed intelligence agent using Genkit.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CompetitiveIntelligenceAgentInputSchema = z.object({
  competitorUrl: z.string().url().describe("Competitor website."),
  userUrl: z.string().url().describe('Reference website.'),
});
export type CompetitiveIntelligenceAgentInput = z.infer<
  typeof CompetitiveIntelligenceAgentInputSchema
>;

const CompetitiveIntelligenceAgentOutputSchema = z.object({
  report: z.string().describe('HTML report.'),
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
  config: { maxOutputTokens: 3000 },
  prompt: `Perform a side-by-side comparison of:
1. Competitor: {{{competitorUrl}}}
2. Reference: {{{userUrl}}}

Single-pass analysis. Limit context to 4000 tokens. Output in structured HTML.`,
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
