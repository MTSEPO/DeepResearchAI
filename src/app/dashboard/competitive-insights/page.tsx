import { CompetitiveInsightForm } from "@/components/competitive-insight-form";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompetitiveInsightsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold font-headline mb-2">Competitive Insights</h1>
        <p className="text-muted-foreground">
          Ask our AI anything about your competitors, market trends, or industry landscape to get actionable insights for your sales and marketing strategy.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
            <CardDescription>
                For example: "What are the main weaknesses of Salesforce compared to HubSpot?" or "Summarize the latest trends in B2B SaaS marketing."
            </CardDescription>
        </CardHeader>
        <CompetitiveInsightForm />
      </Card>
    </div>
  );
}
