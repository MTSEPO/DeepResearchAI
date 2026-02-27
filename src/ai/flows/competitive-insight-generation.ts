'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating competitive intelligence insights.
 *
 * - competitiveInsightGeneration - A function that generates AI-driven insights about competitors or market trends.
 * - CompetitiveInsightGenerationInput - The input type for the competitiveInsightGeneration function.
 * - CompetitiveInsightGenerationOutput - The return type for the competitiveInsightGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const runtime = 'edge';

const CompetitiveInsightGenerationInputSchema = z.object({
  question: z
    .string()
    .describe("The user's question about competitors or market trends."),
});
export type CompetitiveInsightGenerationInput = z.infer<
  typeof CompetitiveInsightGenerationInputSchema
>;

const CompetitiveInsightGenerationOutputSchema = z.object({
  insight: z.string().describe('An AI-driven insight to inform sales strategy.'),
});
export type CompetitiveInsightGenerationOutput = z.infer<
  typeof CompetitiveInsightGenerationOutputSchema
>;

export async function competitiveInsightGeneration(
  input: CompetitiveInsightGenerationInput
): Promise<CompetitiveInsightGenerationOutput> {
  return competitiveInsightGenerationFlow(input);
}

const competitiveInsightPrompt = ai.definePrompt({
  name: 'competitiveInsightPrompt',
  input: {schema: CompetitiveInsightGenerationInputSchema},
  output: {schema: CompetitiveInsightGenerationOutputSchema},
  prompt: `You are an expert competitive intelligence analyst. Provide a concise, actionable insight.

User Question: {{{question}}}`,
});

const competitiveInsightGenerationFlow = ai.defineFlow(
  {
    name: 'competitiveInsightGenerationFlow',
    inputSchema: CompetitiveInsightGenerationInputSchema,
    outputSchema: CompetitiveInsightGenerationOutputSchema,
  },
  async input => {
    const {output} = await competitiveInsightPrompt(input);
    return output!;
  }
);
