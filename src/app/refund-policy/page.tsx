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
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="bg-secondary/30 p-8 rounded-lg border border-primary/20 my-8">
            <h2 className="text-xl font-bold mb-4">Unconditional Money-Back Guarantee</h2>
            <p className="text-lg leading-relaxed">
              Users are entitled to a full refund within 14 days of purchase for any reason. 
              If you are unhappy with your purchase for any reason, you are entitled to a full refund within 14 days of your initial transaction.
            </p>
            <p className="mt-4">
              To initiate a refund, please contact <a href="mailto:help@paddle.com" className="text-primary font-bold hover:underline">help@paddle.com</a> or our support team directly.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">1. 14-Day Full Refund Window</h2>
          <p>
            We offer a comprehensive 14-day money-back guarantee. Our goal is to ensure you have a strategic advantage with our engine. If it does not meet your expectations, we respect your right to a full refund without any qualifiers or usage restrictions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">2. Process</h2>
          <p>
            Refunds are processed through our Merchant of Record. You can reach out to their support team directly or contact us at <a href="mailto:tsepomotsatse@gmail.com" className="text-primary hover:underline">tsepomotsatse@gmail.com</a> and we will facilitate the request immediately.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
