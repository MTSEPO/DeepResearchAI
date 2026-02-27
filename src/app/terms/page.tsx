import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4 font-bold">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: May 24, 2024</p>

          <p>
            Welcome to DeepResearchAI. By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Use License</h2>
          <p>
            Permission is granted to use DeepResearchAI's strategic engine for competitive research. This is the grant of a license, not a transfer of title.
          </p>
          <p>Under this license you may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or copy the software materials.</li>
            <li>Use the materials for any public display (commercial or non-commercial) without an active license.</li>
            <li>Attempt to decompile or reverse engineer any software contained on the platform.</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Disclaimer</h2>
          <p>
            The materials on DeepResearchAI's website are provided on an 'as is' basis. DeepResearchAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, or fitness for a particular purpose.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Limitations</h2>
          <p>
            In no event shall DeepResearchAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the AI research tools.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Strategic Insights</h2>
          <p>
            The AI-generated insights are for strategic guidance only. We do not guarantee the accuracy of competitor data retrieved from third-party sources and recommend verifying critical business information independently.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of our operating jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact</h2>
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
