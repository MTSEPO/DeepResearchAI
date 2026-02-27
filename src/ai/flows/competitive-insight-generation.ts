'use server';
/**
 * @fileOverview Fast competitive insight generation using Server Actions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CompetitiveInsightGenerationInputSchema = z.object({
  question: z.string().describe("The user's question about competitors."),
});
export type CompetitiveInsightGenerationInput = z.infer<
  typeof CompetitiveInsightGenerationInputSchema
>;

const CompetitiveInsightGenerationOutputSchema = z.object({
  insight: z.string().describe('AI-driven insight.'),
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
  config: { maxOutputTokens: 1000 },
  prompt: `You are a Senior Analyst. Provide a single-pass, high-speed insight (max 4000 token context).
  
Question: {{{question}}}`,
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
