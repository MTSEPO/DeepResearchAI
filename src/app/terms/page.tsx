import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-gray dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: July 23, 2024</p>

          <p>
            By accessing the website at DeepResearchAI, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2>1. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on DeepResearchAI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ol>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial) unless explicitly permitted by your subscription plan;</li>
            <li>attempt to decompile or reverse engineer any software contained on DeepResearchAI's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ol>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by DeepResearchAI at any time.
          </p>

          <h2>2. Disclaimer</h2>
          <p>
            The materials on DeepResearchAI's website are provided on an 'as is' basis. DeepResearchAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>3. Limitations</h2>
          <p>
            In no event shall DeepResearchAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DeepResearchAI's website, even if DeepResearchAI or a DeepResearchAI authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          
          <h2>4. Modifications</h2>
          <p>
            DeepResearchAI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of our operating jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, you can contact us:</p>
          <ul>
            <li>By email: <a href="mailto:motsatsetsepo66@gmail.com">motsatsetsepo66@gmail.com</a></li>
            <li>By WhatsApp: +27 67 948 9264</li>
          </ul>

        </article>
      </main>
      <Footer />
    </div>
  );
}
