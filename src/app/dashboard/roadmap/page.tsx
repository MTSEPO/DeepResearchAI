import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Rocket } from "lucide-react";

export default function RoadmapPage() {
    const roadmapItems = {
        now: [
            { text: "Core AI Insight Engine", done: true },
            { text: "Market Gap Analysis v1", done: true },
            { text: "Flexible Pricing (PWYW)", done: true },
        ],
        next: [
            { text: "Advanced Data Visualizations for Reports", done: false },
            { text: "Team Collaboration Features", done: false },
            { text: "Integration with CRM platforms (e.g., Salesforce, HubSpot)", done: false },
        ],
        later: [
            { text: "Automated Competitor Monitoring & Alerts", done: false },
            { text: "Multi-language AI Support", done: false },
            { text: "Public API for custom integrations", done: false },
        ]
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline mb-2">Roadmap</h1>
                <p className="text-muted-foreground">
                    Our vision for the future of DeepResearchAI. Here's what we're working on.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Check className="text-green-500"/>
                            Now
                        </CardTitle>
                        <CardDescription>Features recently launched.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {roadmapItems.now.map(item => (
                                <li key={item.text} className="flex items-center gap-2 text-muted-foreground">
                                    <Check className="w-4 h-4 text-primary" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card className="border-primary">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <Clock />
                            Next
                        </CardTitle>
                        <CardDescription>What we're currently building.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                             {roadmapItems.next.map(item => (
                                <li key={item.text} className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Rocket/>
                            Later
                        </CardTitle>
                        <CardDescription>Future ideas and explorations.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                             {roadmapItems.later.map(item => (
                                <li key={item.text} className="flex items-center gap-2 text-muted-foreground">
                                    <Rocket className="w-4 h-4" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
