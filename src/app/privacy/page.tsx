'use client';

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4 font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: March 2, 2024</p>

          <p>
            At DeepResearchAI, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by DeepResearchAI and how we use it.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us directly:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Data:</strong> We collect your email address and name via Firebase Authentication to manage your account and provide access to our services.</li>
            <li><strong>Research Queries:</strong> We store the search queries and competitor URLs you input into our "Strategic Engine" to generate reports and provide history.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">2. AI Data Processing</h2>
          <p>
            Our core research features utilize the Google Gemini API (Google AI) to synthesize and analyze market data.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Processing:</strong> Your research queries are sent to Google Gemini for real-time analysis.</li>
            <li><strong>Training:</strong> We do not use your proprietary search data or company descriptions to train our base AI models.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">3. Payments and Billing</h2>
          <p>
            Payments are processed securely through <strong>Paddle</strong>, our Merchant of Record. DeepResearchAI does not store your full payment card information on our servers; we only receive confirmation of payment status from Paddle.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 font-headline">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us at:
            <br />
            Email: <a href="mailto:tsepomotsatse@gmail.com" className="text-primary hover:underline">tsepomotsatse@gmail.com</a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
