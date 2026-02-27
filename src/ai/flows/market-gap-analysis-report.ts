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

export const maxDuration = 10;

const CompanyInfoSchema = z.object({
  name: z.string().describe('The name of the company.'),
  productDescription: z.string().describe('A detailed description of the company\'s product or service.'),
});

const MarketGapAnalysisReportInputSchema = z.object({
  userCompany: CompanyInfoSchema.describe('Information about the user\'s company.'),
  competitors: z.array(CompanyInfoSchema).describe('A list of key competitors with their company and product information.'),
});
export type MarketGapAnalysisReportInput = z.infer<typeof MarketGapAnalysisReportInputSchema>;

const MarketGapAnalysisReportOutputSchema = z.object({
  title: z.string().describe('The title of the market gap analysis report.'),
  introduction: z.string().describe('An introductory summary of the report.'),
  identifiedGaps: z.array(
    z.object({
      gapName: z.string().describe('A concise name for the identified market gap.'),
      description: z.string().describe('A detailed description of the market gap and why it exists.'),
      opportunity: z.string().describe('How the user\'s company can leverage this gap to gain a competitive advantage.'),
      competitorsAddressing: z.array(z.string()).describe('List of competitors, if any, that are partially or fully addressing this gap.'),
    })
  ).describe('A list of identified market gaps, their descriptions, opportunities, and which competitors are addressing them.'),
  strategicRecommendations: z.array(
    z.string().describe('Specific, actionable recommendations for the user\'s company to address identified gaps and refine product positioning.')
  ).describe('Strategic recommendations for the user\'s company.'),
  conclusion: z.string().describe('A concluding summary of the report.'),
});
export type MarketGapAnalysisReportOutput = z.infer<typeof MarketGapAnalysisReportOutputSchema>;

export async function generateMarketGapAnalysisReport(input: MarketGapAnalysisReportInput): Promise<MarketGapAnalysisReportOutput> {
  return marketGapAnalysisReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketGapAnalysisPrompt',
  input: { schema: MarketGapAnalysisReportInputSchema },
  output: { schema: MarketGapAnalysisReportOutputSchema },
  prompt: `You are an expert market analyst specializing in competitive intelligence. Your task is to generate a comprehensive market gap analysis report.

Analyze the user's company and product against the provided competitors to identify potential market gaps, opportunities for differentiation, and strategic recommendations.

User's Company:
Name: {{{userCompany.name}}}
Product Description: {{{userCompany.productDescription}}}

Competitors:
{{#each competitors}}
Name: {{{name}}}
Product Description: {{{productDescription}}}
---
{{/each}}

Based on the above information, generate a structured market gap analysis report focusing on identifying white spaces, underserved customer needs, or areas where the user's product can gain a significant competitive advantage. Provide actionable strategic recommendations.`,
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
