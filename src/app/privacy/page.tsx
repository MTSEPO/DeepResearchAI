import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-gray dark:prose-invert max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>
            Your privacy is important to us. It is DeepResearchAI's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <h3>Log Data</h3>
          <p>
            When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
          </p>
          <h3>Personal Information</h3>
          <p>
            We may ask for personal information, such as your: Name, Email, Social media profiles, Date of birth, Phone/mobile number, Home/Mailing address, Work address, Payment information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Process your transactions</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2>3. Security of Your Personal Information</h2>
          <p>
            We retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
          </p>
          
          <h2>5. Links to Other Sites</h2>
          <p>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, you can contact us:</p>
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
