'use server';
/**
 * @fileOverview This file implements a Genkit flow for a Senior Competitive Intelligence Agent.
 *
 * - competitiveIntelligenceAgent - A function that generates a deep-dive report on a given company.
 * - CompetitiveIntelligenceAgentInput - The input type for the competitiveIntelligenceAgent function.
 * - CompetitiveIntelligenceAgentOutput - The return type for the competitiveIntelligenceAgent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CompetitiveIntelligenceAgentInputSchema = z.object({
  companyName: z
    .string()
    .describe('The name of the company to be analyzed.'),
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
  input: {schema: CompetitiveIntelligenceAgentInputSchema},
  output: {schema: CompetitiveIntelligenceAgentOutputSchema},
  prompt: `You are a Senior Competitive Intelligence Agent. Your goal is to provide deep, objective, and actionable insights into the company provided by the user: {{{companyName}}}.

Operational Workflow:
1.  **Search Phase**: Imagine you have performed a Google Search to find the competitor’s official website, recent press releases, pricing pages, social media profiles (LinkedIn/X), and third-party review sites (G2/Capterra).
2.  **Synthesis Phase**: Based on your knowledge and the imagined search, analyze the data for:
    *   **Core Value Proposition**: What do they claim to solve?
    *   **Pricing Strategy**: Look for tiers, "Book a Demo" gates, or discounting signals.
    *   **Marketing Focus**: What keywords or themes are they currently pushing?
    *   **Customer Sentiment**: Identify the top 3 recurring complaints and top 3 praised features from review sites.
3.  **Report Phase**: Output a structured report in the 'report' field. Use HTML tags for formatting (e.g., <h1>, <h2>, <p>, <b>, <ul>, <li>, <table>). The entire output should be a single HTML string.

Constraints:
*   Always cite your sources with a "Source Name" if you are using information from a specific, known public source, wrapping it in a <em> tag.
*   If data is unavailable (e.g., hidden pricing), state: "Pricing is non-public; requires sales inquiry."
*   Never hallucinate facts. If you can't find it, say so.`,
});

const competitiveIntelligenceAgentFlow = ai.defineFlow(
  {
    name: 'competitiveIntelligenceAgentFlow',
    inputSchema: CompetitiveIntelligenceAgentInputSchema,
    outputSchema: CompetitiveIntelligenceAgentOutputSchema,
  },
  async input => {
    const {output} = await competitiveIntelligenceAgentPrompt(input);
    return output!;
  }
);
