'use client';

import Footer from "@/components/layout/footer";
import Header from "@/components/header";

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4 font-bold">Refund Policy</h1>
          <p className="text-muted-foreground">Last updated: October 26, 2023</p>

          <p>
            At DeepResearchAI, we want you to be completely satisfied with our strategic intelligence engine. This Refund Policy outlines the conditions under which refunds are provided for our subscription plans and Lifetime Deal (LTD) licenses.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">1. 7-Day "No Questions Asked" Window</h2>
          <p>
            For new subscribers and Lifetime Deal purchasers, we offer a 7-day money-back guarantee. If you are not satisfied with the platform for any reason, you may request a full refund within 7 days of your initial purchase date.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">2. AI Usage & Abuse Prevention</h2>
          <p>
            To maintain the integrity of our service and prevent API abuse, refunds are subject to the following usage limits:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Report Limit:</strong> Refunds will not be granted if more than <strong>2</strong> research reports (e.g., "Market Gap Analysis" or "Intelligence Agent" reports) have been generated during the 7-day window.</li>
          </ul>
          <p>
            We implement these limits because each AI generation incurs significant computational and data retrieval costs.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">3. Subscription Renewals</h2>
          <p>
            Monthly and annual subscription renewals are non-refundable. You may cancel your subscription at any time to prevent future billings, but no prorated refunds will be issued for the remaining period of an active billing cycle.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">4. How to Request a Refund</h2>
          <p>
            To request a refund, please send an email to our strategic support team:
          </p>
          <p>
            Email: <a href="mailto:tsepomotsatse@gmail.com" className="text-primary hover:underline">tsepomotsatse@gmail.com</a>
          </p>
          <p>
            Please include your account email address and your Paddle transaction ID to expedite the process. Refunds will be processed back to the original payment method within 5-10 business days.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">5. Abuse of Policy</h2>
          <p>
            DeepResearchAI reserves the right to deny refund requests to users who repeatedly purchase and refund the service or who are found to be in violation of our Terms of Service.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
