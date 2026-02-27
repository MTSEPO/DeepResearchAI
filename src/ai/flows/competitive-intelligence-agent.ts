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

export const maxDuration = 60;

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
  prompt: `You are a Senior Competitive Intelligence Agent. Your goal is to provide a deep, objective, and actionable comparison between two websites provided by the user.

Website 1 (Competitor): {{{competitorUrl}}}
Website 2 (Reference): {{{userUrl}}}

Operational Workflow:
1.  **Crawl & Search Phase**: Imagine you have thoroughly crawled both websites and performed Google Searches to find recent press releases, pricing pages, social media profiles (LinkedIn/X), and third-party review sites (G2/Capterra) for both entities.
2.  **Synthesis & Comparison Phase**: Analyze and compare both entities side-by-side on the following criteria:
    *   **Core Value Proposition**: What problem does each solve? How do their messages differ?
    *   **Pricing Strategy**: Compare their pricing models, tiers, and accessibility. Note any "Book a Demo" gates or discounting signals.
    *   **Marketing Focus**: What keywords, themes, and target audiences are they currently pushing?
    *   **Customer Sentiment**: For both, identify recurring complaints and praised features from your simulated review site search.
3.  **Report Phase**: Output a structured comparative report in the 'report' field. Use HTML tags for formatting (e.g., <h1>, <h2>, <p>, <b>, <ul>, <li>, <table>). The report should clearly delineate the analysis for each website and then provide a summary of key differences and opportunities.

Constraints:
*   Always cite your sources with a "Source Name" if you are using information from a specific, known public source, wrapping it in a <em> tag.
*   If data is unavailable (e.g., hidden pricing for one or both), state it clearly (e.g., "Pricing for [Company] is non-public; requires sales inquiry.").
*   Never hallucinate facts. If you can't find the information for a comparison point, state that it was not found.`,
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
