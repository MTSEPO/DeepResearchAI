'use client';

import Link from 'next/link';
import { Logo } from '../icons/logo';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold font-headline tracking-tight">DeepResearchAI</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Equipping sales teams with the strategic intelligence engine needed to dismantle the competition and uncover market white space.
            </p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-foreground">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="/dashboard/briefing" className="text-muted-foreground hover:text-primary transition-colors">Operational Briefing</Link></li>
                <li><a href="mailto:tsepomotsatse@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-medium">Support</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-foreground">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-center text-xs text-muted-foreground">
          <p>
            © {year || 2024} DeepResearchAI. All rights reserved. Operated by Tsepo Motsatse.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://x.com/MotsatseTimothy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">X (Twitter)</a>
            <a href="https://www.linkedin.com/in/tsepo-motsatse" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
