import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';
import type { MarketGapAnalysisReportOutput } from '@/ai/flows/market-gap-analysis-report';
import { CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react';

type MarketGapReportProps = {
  report: MarketGapAnalysisReportOutput;
};

export function MarketGapReport({ report }: MarketGapReportProps) {
  return (
    <div className="space-y-8">
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-3xl font-headline">{report.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{report.introduction}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-primary" />
            <span className="font-headline">Identified Market Gaps</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {report.identifiedGaps.map((gap, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold">{gap.gapName}</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <p className="text-base">{gap.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      Opportunity
                    </h4>
                    <p className="text-muted-foreground pl-7">{gap.opportunity}</p>
                  </div>
                  {gap.competitorsAddressing.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Competitors in this space:</h4>
                      <div className="flex flex-wrap gap-2">
                        {gap.competitorsAddressing.map((comp) => (
                          <Badge key={comp} variant="secondary">
                            {comp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <span className="font-headline">Strategic Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 list-disc list-inside">
            {report.strategicRecommendations.map((rec, index) => (
              <li key={index} className="text-muted-foreground">
                <span className="text-foreground">{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="font-headline">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{report.conclusion}</p>
        </CardContent>
      </Card>
    </div>
  );
}
