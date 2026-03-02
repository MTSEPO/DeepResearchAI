'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Star, Zap } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PwywSlider } from '@/components/pwyw-slider';
import { Badge } from '@/components/ui/badge';
import { usePaddle } from '@/components/paddle-provider';
import { useUser } from '@/firebase';

export default function PricingPage() {
  const router = useRouter();
  const { paddle } = usePaddle();
  const { user } = useUser();
  
  const handleCheckout = (priceId: string) => {
    if (!user) {
      router.push('/signup');
      return;
    }

    if (paddle) {
      paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
        customData: { userId: user.uid },
        settings: {
          displayMode: 'overlay',
          theme: 'light',
          locale: 'en',
        }
      });
    }
  };

  const plans = [
    {
      name: 'Hobbyist',
      price: '$0',
      period: 'Free Forever',
      description: 'Explore the engine and run basic competitor checks.',
      features: [
        'Basic Market Gap Tool',
        '3 AI Insights per day',
        'Standard Report Speed',
        'Community Forum Access'
      ],
      cta: 'Start Free',
      href: '/signup',
      variant: 'outline' as const,
    },
    {
      name: 'Community',
      price: '$15',
      period: 'You Decide',
      description: 'Support the project and get full access to the strategic engine.',
      features: [
        'Full Intelligence Agent access',
        'Unlimited Market Gap Reports',
        'Priority Report Generation',
        'Discord Support Channel',
        'Commercial Use License'
      ],
      cta: 'Claim Access',
      priceId: process.env.NEXT_PUBLIC_PADDLE_COMMUNITY_PRICE_ID || '',
      variant: 'default' as const,
      isPwyw: true,
      badge: 'Best Value (PWYW)',
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/ month',
      description: 'For agencies and power users needing the ultimate advantage.',
      features: [
        'Everything in Community',
        'Advanced Data Visualization',
        'White-label Report Export',
        '1-on-1 Strategy Support',
        'Early access to Roadmap'
      ],
      cta: 'Go Pro',
      priceId: process.env.NEXT_PUBLIC_PADDLE_PRO_PRICE_ID || '',
      variant: 'secondary' as const,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Button 
              variant="ghost" 
              onClick={() => router.back()} 
              className="mb-8 flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline text-foreground">
                Pricing for Every Strategist
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're a solo founder or an agency head, we have a plan to help you dismantle the competition.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`flex flex-col relative ${plan.isPwyw ? 'border-primary shadow-xl ring-1 ring-primary/20 scale-105 z-10' : 'shadow-sm'}`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 fill-current" />
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-center mb-8">
                      {plan.isPwyw ? (
                        <div className="p-4 bg-secondary/30 rounded-xl">
                          <PwywSlider />
                        </div>
                      ) : (
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                          <span className="text-muted-foreground text-sm">{plan.period}</span>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-1 bg-primary/10 rounded-full p-0.5">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-8">
                    {plan.priceId ? (
                      <Button onClick={() => handleCheckout(plan.priceId)} className="w-full h-11 text-base font-semibold" variant={plan.variant}>
                        {plan.cta}
                      </Button>
                    ) : (
                      <Button asChild className="w-full h-11 text-base font-semibold" variant={plan.variant}>
                        <Link href={plan.href || '/signup'}>{plan.cta}</Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card className="mt-16 overflow-hidden border-none shadow-2xl">
              <div className="bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                      <Zap className="w-4 h-4 fill-current" />
                      Limited Time Offer
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-headline text-white">
                      Professional Lifetime Deal (LTD)
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Stop worrying about monthly subscriptions. Get full, permanent access to the Strategic Engine for a single payment.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {[
                        'One-time payment',
                        'Forever updates',
                        'All Pro features',
                        'Founder support'
                      ].map(item => (
                        <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                          <Check className="w-4 h-4 text-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-inner text-center space-y-6">
                    <div>
                      <span className="text-muted-foreground line-through text-lg">$999 Value</span>
                      <div className="text-6xl font-black text-primary">$299</div>
                      <span className="text-primary/60 font-medium">One-time payment</span>
                    </div>
                    <Button 
                      onClick={() => handleCheckout(process.env.NEXT_PUBLIC_PADDLE_LTD_PRICE_ID || '')}
                      size="lg" 
                      className="w-full h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      Secure Lifetime Access
                    </Button>
                    <p className="text-xs text-muted-foreground italic">
                      Locked-in pricing. No hidden fees, ever.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-20 text-center">
              <p className="text-muted-foreground">
                All payments are processed securely via <strong>Paddle</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}