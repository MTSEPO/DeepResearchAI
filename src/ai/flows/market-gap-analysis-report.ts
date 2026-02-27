'use server';
/**
 * @fileOverview A high-speed Genkit flow for generating market gap analysis.
 *
 * - generateMarketGapAnalysisReport - Handles the analysis in a single pass.
 * - MarketGapAnalysisReportInput - Simplified input schema.
 * - MarketGapAnalysisReportOutput - Structured output for the report.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const runtime = 'edge';

const CompanyInfoSchema = z.object({
  name: z.string().describe('Company name'),
  desc: z.string().describe('Short product summary'),
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

// Internal tool to simulate high-speed search limited to top 3 results
const searchTool = ai.defineTool(
  {
    name: 'searchCompetitorInsights',
    description: 'Quickly retrieves top 3 market insights for a company.',
    inputSchema: z.object({ query: z.string() }),
    outputSchema: z.array(z.string()),
  },
  async (input) => {
    // This is a placeholder for actual Google/Tavily search logic.
    // Capping at 3 results per request as per MVP speed requirements.
    return [
      `Insight 1 for ${input.query}`,
      `Insight 2 for ${input.query}`,
      `Insight 3 for ${input.query}`,
    ];
  }
);

export async function generateMarketGapAnalysisReport(input: MarketGapAnalysisReportInput): Promise<MarketGapAnalysisReportOutput> {
  return marketGapAnalysisReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketGapAnalysisPrompt',
  input: { schema: MarketGapAnalysisReportInputSchema },
  output: { schema: MarketGapAnalysisReportOutputSchema },
  tools: [searchTool],
  config: {
    maxOutputTokens: 2000,
    temperature: 0.7,
  },
  prompt: `Perform a single-pass market gap analysis.
  
User Company: {{{userCompany.name}}} - {{{userCompany.desc}}}

Competitors:
{{#each competitors}}
- {{{name}}}: {{{desc}}}
{{/each}}

1. Use searchCompetitorInsights for each competitor (max 3 results each).
2. Synthesize all data into identified gaps and white spaces.
3. Limit context to 4000 tokens for maximum speed.
4. Output a concise, high-impact report.`,
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
