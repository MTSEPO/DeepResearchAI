import Link from 'next/link';
import { ArrowRight, BrainCircuit, Target, Bot, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  const featureCards = [
    {
      title: 'Competitive Insights',
      description: 'Ask any question about your market.',
      href: '/dashboard/competitive-insights',
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Market Gap Analysis',
      description: 'Analyze your position against competitors.',
      href: '/dashboard/market-gap',
      icon: <Target className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Intelligence Agent',
      description: 'Compare your website against a competitor.',
      href: '/dashboard/intelligence-agent',
      icon: <Bot className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-headline text-2xl">Welcome to DeepResearchAI!</CardTitle>
              <Badge variant="secondary">Operational</Badge>
            </div>
            <CardDescription>Your AI-powered competitive intelligence assistant.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We're thrilled to have you on board. DeepResearchAI is designed to give your sales team the edge by providing deep, actionable insights into your competitive landscape. Use our tools to uncover market gaps, understand competitor strategies, and make data-driven decisions that drive growth.
            </p>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">New: Operational Briefing</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Read the mission briefing to understand how to fully leverage the Strategic Engine.
                </p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/dashboard/briefing">View Briefing</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center p-6 border-dashed">
          <h3 className="font-semibold text-2xl mb-1">Tsepo</h3>
          <p className="text-sm text-muted-foreground mb-4">Founder, DeepResearchAI</p>
          <div className="space-y-2 w-full">
            <Button asChild variant="outline" size="sm" className="w-full">
              <a href="https://tsepoai-showcase.vercel.app" target="_blank" rel="noopener noreferrer">
                View Showcase <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold font-headline">Get Started</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map(card => (
            <Link key={card.href} href={card.href} className="block group">
              <Card className="h-full hover:border-primary/50 transition-all group-hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{card.title}</CardTitle>
                  <div className="p-2 rounded-md bg-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {card.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
