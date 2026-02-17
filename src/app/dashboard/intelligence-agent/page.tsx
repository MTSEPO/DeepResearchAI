import { IntelligenceAgentForm } from "@/components/intelligence-agent-form";

export default function IntelligenceAgentPage() {
    return (
        <div className="space-y-8">
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold font-headline mb-2">Competitive Intelligence Agent</h1>
                <p className="text-muted-foreground">
                    Get a deep, objective, and actionable report on any company. Our AI agent will perform a detailed analysis based on publicly available information.
                </p>
            </div>
            <IntelligenceAgentForm />
        </div>
    );
}
