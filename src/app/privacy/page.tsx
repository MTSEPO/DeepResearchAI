import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4 font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: May 24, 2024</p>

          <p>
            At DeepResearchAI, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by DeepResearchAI and how we use it.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Log Data:</strong> Like most websites, we collect information that your browser sends whenever you visit our service.</li>
            <li><strong>Personal Information:</strong> We may ask for your email address, name, and billing information to manage your account and process payments via Lemon Squeezy.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our AI intelligence engine.</li>
            <li>Improve, personalize, and expand our research capabilities.</li>
            <li>Process your transactions and manage your strategic license.</li>
            <li>Communicate with you regarding updates or support.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Services</h2>
          <p>
            We use third-party services like Google AI (Gemini) for processing research queries and Lemon Squeezy for payments. These providers have their own privacy policies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
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
