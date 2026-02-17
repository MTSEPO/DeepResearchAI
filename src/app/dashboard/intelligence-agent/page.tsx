import { IntelligenceAgentForm } from "@/components/intelligence-agent-form";

export default function IntelligenceAgentPage() {
    return (
        <div className="space-y-8">
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold font-headline mb-2">Competitive Intelligence Agent</h1>
                <p className="text-muted-foreground">
                    Compare your website against a competitor. Our AI agent will perform a detailed analysis of both URLs and generate a comparative report.
                </p>
            </div>
            <IntelligenceAgentForm />
        </div>
    );
}
