import Link from 'next/link';
import { ArrowRight, BrainCircuit, Target, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  const featureCards = [
    {
      title: 'Competitive Insights',
      description: 'Ask any question about your market.',
      href: '/dashboard/competitive-insights',
      icon: <BrainCircuit className="w-6 h-6" />,
    },
    {
      title: 'Market Gap Analysis',
      description: 'Analyze your position against competitors.',
      href: '/dashboard/market-gap',
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: 'Intelligence Agent',
      description: 'Compare your website against a competitor.',
      href: '/dashboard/intelligence-agent',
      icon: <Bot className="w-6 h-6" />,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Welcome to DeepResearchAI!</CardTitle>
            <CardDescription>Your AI-powered competitive intelligence assistant.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We're thrilled to have you on board. DeepResearchAI is designed to give your sales team the edge by providing deep, actionable insights into your competitive landscape. Use our tools to uncover market gaps, understand competitor strategies, and make data-driven decisions that drive growth.
            </p>
            <p>
              We believe in making powerful tools accessible to everyone. That's why we offer a <strong>Pay-What-You-Want</strong> Community plan. If you find value in our product, consider supporting our development by choosing a price that works for you. Your contribution helps us improve and build new features.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center p-6">
          <h3 className="font-semibold text-2xl mb-2">Tsepo</h3>
          <p className="text-sm text-muted-foreground mb-4">Founder of DeepResearchAI</p>
          <Button asChild variant="outline" size="sm">
            <a href="https://tsepoai-showcase.vercel.app" target="_blank" rel="noopener noreferrer">
              View Showcase <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold font-headline">Get Started</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map(card => (
            <Link key={card.href} href={card.href} className="block">
              <Card className="h-full hover:bg-muted/50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{card.title}</CardTitle>
                  {card.icon}
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
