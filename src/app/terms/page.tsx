'use client';

import Footer from "@/components/layout/footer";
import Header from "@/components/header";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4 font-bold">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: October 26, 2023</p>

          <p>
            Welcome to DeepResearchAI. By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">1. Use License & Restrictions</h2>
          <p>
            Permission is granted to use DeepResearchAI's strategic engine for professional competitive research. This is a license, not a transfer of title.
          </p>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the tool for illegal research or to gather data in violation of third-party privacy.</li>
            <li>Automate scraping or bulk extraction of data from our platform or via our AI tools beyond standard manual use.</li>
            <li>Attempt to reverse engineer the AI logic or software contained on the platform.</li>
            <li>Use the "Strategic Engine" to generate deceptive or harmful content.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">2. AI Disclaimers</h2>
          <p>
            DeepResearchAI provides AI-generated insights for <strong>informational purposes only</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Accuracy:</strong> While we strive for accuracy, AI models can hallucinate or rely on outdated web data. We do not guarantee the validity of competitor data.</li>
            <li><strong>Verification:</strong> Users are responsible for verifying critical business information independently before making financial or strategic decisions.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">3. Subscriptions and Billing</h2>
          <p>
            All subscriptions and one-time payments are managed by <strong>Paddle</strong>, our Merchant of Record.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Billing Cycles:</strong> Monthly and annual plans renew automatically unless canceled via the billing dashboard.</li>
            <li><strong>Cancellations:</strong> You can cancel at any time. Access remains active until the end of the current billing period.</li>
            <li><strong>Price Changes:</strong> We reserve the right to modify pricing with 30 days' notice to active subscribers.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">4. Limitations of Liability</h2>
          <p>
            In no event shall DeepResearchAI be liable for any damages (including loss of profit or data) arising out of the use or inability to use our AI research tools, even if we have been notified of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">5. Contact</h2>
          <p>
            For any legal or support inquiries, please contact:
            <br />
            Email: <a href="mailto:tsepomotsatse@gmail.com" className="text-primary hover:underline">tsepomotsatse@gmail.com</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
