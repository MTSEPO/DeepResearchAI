export const dynamic = 'force-dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart, BrainCircuit, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Market Gap Analysis',
      description: 'Leverage AI to identify untapped opportunities and white spaces in your market by analyzing you and your competitors.',
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: 'Real-time Competitive Insights',
      description: 'Ask any question about your competitors or market trends and get instant, AI-powered answers to inform your strategy.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: 'Data-Driven Sales Strategy',
      description: 'Equip your sales team with actionable intelligence to outperform the competition and close more deals.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: 'Strategic Recommendations',
      description: 'Receive tailored recommendations to refine your product positioning and capitalize on identified market gaps.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative pt-16 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="py-1 px-3 border-primary/50 text-primary">
                  For Ambitious Sales Teams
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter font-headline">
                  AI Competitive Intelligence for Sales Teams
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Dismantle competitor data with real-time AI insights. Uncover market gaps and win more deals with our strategic intelligence engine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="font-semibold">
                    <Link href="/signup">
                      Get Started for Free
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-semibold">
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/hero-image/1280/720"
                  alt="DeepResearchAI Dashboard Preview"
                  fill
                  className="object-cover"
                  data-ai-hint="abstract technology"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
                Your Unfair Advantage
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Go beyond surface-level data. DeepResearchAI provides the deep insights you need to make strategic decisions.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">{feature.icon}</div>
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing-preview" className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="bg-card border rounded-xl p-8 md:p-12 lg:p-16 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
                    Flexible Pricing for Every Team
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    From hobbyists to enterprise teams, we have a plan that fits your needs. Start for free or choose a plan that grows with you.
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-4">
                  <p className="text-xl font-medium">Ready to dive deeper?</p>
                  <Button asChild size="lg" className="font-semibold">
                    <Link href="/pricing">
                      Explore All Plans
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
