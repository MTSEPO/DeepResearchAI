'use client';

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4 font-bold">Refund Policy</h1>
          <p className="text-muted-foreground">Last updated: March 2, 2024</p>

          <p>
            At DeepResearchAI, we offer a transparent refund policy for our strategic intelligence engine.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">1. 7-Day Money-Back Guarantee</h2>
          <p>
            We offer a 7-day money-back guarantee for new subscribers. If you are not satisfied, you may request a full refund within 7 days of purchase.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">2. AI Usage Limits</h2>
          <p>
            To prevent API abuse, refunds are not granted if more than <strong>2</strong> research reports have been generated during the 7-day window.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">3. How to Request</h2>
          <p>
            To request a refund, email our support team with your transaction details:
            <br />
            Email: <a href="mailto:tsepomotsatse@gmail.com" className="text-primary hover:underline">tsepomotsatse@gmail.com</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
