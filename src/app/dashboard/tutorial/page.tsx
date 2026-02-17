import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BrainCircuit, Target } from "lucide-react";

export default function TutorialPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold font-headline mb-2">Tutorials & Guides</h1>
                <p className="text-muted-foreground">
                    Learn how to get the most out of DeepResearchAI with these step-by-step guides.
                </p>
            </div>

            <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold">
                        <div className="flex items-center gap-3">
                            <BrainCircuit className="w-6 h-6 text-primary" />
                            How to Generate Your First Competitive Insight
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="prose prose-gray dark:prose-invert pt-2">
                        <p>The Competitive Insights tool is your direct line to our AI analyst. It's perfect for quick questions and real-time fact-checking.</p>
                        <ol>
                            <li>Navigate to the <strong>Competitive Insights</strong> page from the sidebar.</li>
                            <li>In the text box, type a clear and specific question about a competitor, market trend, or industry topic.</li>
                            <li>
                                <strong>Good examples:</strong>
                                <ul>
                                    <li>"What are the top 3 pricing strategies for B2B CRM software?"</li>
                                    <li>"Summarize customer reviews for Competitor X's new feature."</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Bad examples (too vague):</strong>
                                <ul>
                                    <li>"Competitors"</li>
                                    <li>"Marketing"</li>
                                </ul>
                            </li>
                            <li>Click the "Generate Insight" button.</li>
                            <li>The AI will process your request and display the insight below the text box. You can then copy the text or ask a follow-up question.</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-semibold">
                        <div className="flex items-center gap-3">
                             <Target className="w-6 h-6 text-primary" />
                            Performing a Market Gap Analysis
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="prose prose-gray dark:prose-invert pt-2">
                        <p>This powerful feature provides a comprehensive report on your market position. The quality of the output depends heavily on the quality of your input.</p>
                         <ol>
                            <li>Go to the <strong>Market Gap Analysis</strong> page.</li>
                            <li>
                                <strong>Your Company Section:</strong>
                                <ul>
                                    <li>Enter your company's name.</li>
                                    <li>Write a detailed description of your product or service. Include your target audience, key features, and unique selling propositions. The more detail, the better.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Competitors Section:</strong>
                                <ul>
                                    <li>By default, there is one competitor form. Fill in their name and product description as accurately as possible.</li>
                                    <li>Click the "Add Competitor" button to add more. We recommend analyzing at least 2-3 key competitors for a thorough report.</li>
                                </ul>
                            </li>
                            <li>Once all information is entered, click "Generate Report".</li>
                            <li>Please be patient, as this is a complex analysis. The full report will appear on the page once completed, broken down into sections like Identified Gaps and Strategic Recommendations.</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
