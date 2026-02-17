import { MarketGapAnalysisForm } from "@/components/market-gap-form";

export default function MarketGapPage() {
    return (
        <div className="space-y-8">
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold font-headline mb-2">Market Gap Analysis</h1>
                <p className="text-muted-foreground">
                    Discover your unique position in the market. Enter your company's details and information about your key competitors to generate a comprehensive AI-powered analysis of market gaps and strategic opportunities.
                </p>
            </div>
            <MarketGapAnalysisForm />
        </div>
    );
}
