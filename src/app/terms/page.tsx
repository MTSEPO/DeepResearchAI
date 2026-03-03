
'use client';

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4 font-bold">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 2, 2024</p>

          <p>
            Welcome to DeepResearchAI. By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">1. Use License & Restrictions</h2>
          <p>
            Permission is granted to use DeepResearchAI's strategic engine for professional competitive research. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the tool for illegal research or scraping.</li>
            <li>Attempt to reverse engineer the AI logic.</li>
            <li>Generate deceptive or harmful content.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">2. AI Disclaimers</h2>
          <p>
            DeepResearchAI provides AI-generated insights for <strong>informational purposes only</strong>. We do not guarantee the validity of competitor data. Users are responsible for independent verification.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">3. Subscriptions</h2>
          <p>
            All subscriptions and payments are managed by <strong>Lemon Squeezy</strong>. Billing cycles renew automatically unless canceled via your customer portal.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">4. Contact</h2>
          <p>
            For any legal inquiries, please contact:
            <br />
            Email: <a href="mailto:tsepomotsatse@gmail.com" className="text-primary hover:underline">tsepomotsatse@gmail.com</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
