
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Twitter, Linkedin, Rocket, ShieldCheck, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OperationalBriefingPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="py-1 px-3 border-primary text-primary">
          Confidential: Founder Access Only
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight font-headline">
          DeepResearch AI – Operational Briefing
        </h1>
        <p className="text-xl text-muted-foreground">
          Welcome, Founder. You are now equipped with the DeepResearch Strategic Engine.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="border-primary/20 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Rocket className="w-6 h-6" />
            </div>
            <CardTitle className="font-headline">How to Access Your Hub</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Your purchase provides dual-path access to the strategic engine:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-secondary/30">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-primary" /> Live Cloud Access
                </h4>
                <p className="text-sm text-muted-foreground">
                  Access the engine via your hosted URL. This version is always synced with the latest AI updates.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-secondary/30">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Forever License
                </h4>
                <p className="text-sm text-muted-foreground">
                  The provided source code is your local license. The main entry is <code>src/app/page.tsx</code>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <CardTitle className="font-headline">Activating Your License</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your license is managed via <strong>Lemon Squeezy</strong>. Ensure your payment is active to unlock full features.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Open the dashboard settings.</li>
              <li>Locate your <strong>License Key</strong> in your Lemon Squeezy receipt.</li>
              <li>Validate the key to unlock the full DeepResearch dashboard.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle className="font-headline">Support & Community</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Contact the lead developer for strategic assistance or technical failures:
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild className="gap-2">
                <a href="mailto:tsepomotsatse@gmail.com">
                  <Mail className="w-4 h-4" /> tsepomotsatse@gmail.com
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="https://x.com/MotsatseTimothy" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" /> @MotsatseTimothy
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="https://www.linkedin.com/in/tsepo-motsatse" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-8">
        <p className="text-2xl font-bold font-headline italic text-primary">
          "Go dismantle the competition."
        </p>
      </div>
    </div>
  );
}
