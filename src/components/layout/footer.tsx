import Link from 'next/link';
import { Logo } from '../icons/logo';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="text-lg font-semibold font-headline">DeepResearchAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI Competitive Intelligence for Sales Teams
            </p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link href="/#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><a href="mailto:motsatsetsepo66@gmail.com" className="text-muted-foreground hover:text-foreground">Support</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground space-y-1">
          <p>
            © {new Date().getFullYear()} DeepResearchAI. All rights reserved.
          </p>
          <p>WhatsApp: +27 67 948 9264</p>
        </div>
      </div>
    </footer>
  );
}
