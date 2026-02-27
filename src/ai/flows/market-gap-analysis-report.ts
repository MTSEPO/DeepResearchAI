'use server';
/**
 * @fileOverview A Genkit flow for generating a comprehensive market gap analysis report.
 *
 * - generateMarketGapAnalysisReport - A function that handles the market gap analysis process.
 * - MarketGapAnalysisReportInput - The input type for the generateMarketGapAnalysisReport function.
 * - MarketGapAnalysisReportOutput - The return type for the generateMarketGapAnalysisReport function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const runtime = 'edge';

const CompanyInfoSchema = z.object({
  name: z.string().describe('Company name'),
  desc: z.string().describe('Product summary'),
});

const MarketGapAnalysisReportInputSchema = z.object({
  userCompany: CompanyInfoSchema,
  competitors: z.array(CompanyInfoSchema),
});
export type MarketGapAnalysisReportInput = z.infer<typeof MarketGapAnalysisReportInputSchema>;

const MarketGapAnalysisReportOutputSchema = z.object({
  title: z.string(),
  introduction: z.string(),
  identifiedGaps: z.array(
    z.object({
      gapName: z.string(),
      description: z.string(),
      opportunity: z.string(),
      competitorsAddressing: z.array(z.string()),
    })
  ),
  strategicRecommendations: z.array(z.string()),
  conclusion: z.string(),
});
export type MarketGapAnalysisReportOutput = z.infer<typeof MarketGapAnalysisReportOutputSchema>;

export async function generateMarketGapAnalysisReport(input: MarketGapAnalysisReportInput): Promise<MarketGapAnalysisReportOutput> {
  return marketGapAnalysisReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketGapAnalysisPrompt',
  input: { schema: MarketGapAnalysisReportInputSchema },
  output: { schema: MarketGapAnalysisReportOutputSchema },
  prompt: `Analyze the user's company against competitors to identify market gaps.

User: {{{userCompany.name}}} - {{{userCompany.desc}}}

Competitors:
{{#each competitors}}
- {{{name}}}: {{{desc}}}
{{/each}}

Identify white spaces and strategic opportunities.`,
});

const marketGapAnalysisReportFlow = ai.defineFlow(
  {
    name: 'marketGapAnalysisReportFlow',
    inputSchema: MarketGapAnalysisReportInputSchema,
    outputSchema: MarketGapAnalysisReportOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
