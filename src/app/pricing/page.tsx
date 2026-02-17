import Link from 'next/link';
import { Check } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PwywSlider } from '@/components/pwyw-slider';
import { Badge } from '@/components/ui/badge';

export default function PricingPage() {
  const plans = [
    {
      name: 'Hobbyist',
      price: '$0',
      period: 'Free Forever',
      description: 'For individuals and hobbyists exploring competitive intelligence.',
      features: ['Basic Core Tools', '1 GB Storage', 'Community Forum Support'],
      cta: 'Get Started',
      href: '/signup',
      variant: 'secondary' as const,
    },
    {
      name: 'Community',
      price: '$15',
      period: 'You Decide',
      description: 'For growing teams who need full access and want to support the community.',
      features: ['Full Access to Core Tools', '10 GB Storage', 'Priority Discord Support', 'Commercial Use License'],
      cta: 'Set Your Price',
      href: '/signup?plan=community',
      variant: 'default' as const,
      isPwyw: true,
      badge: 'Pay What You Want',
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/ month',
      description: 'For professionals and agencies requiring unlimited power and premium features.',
      features: ['Full Access to Core Tools', 'Unlimited Storage', '24/7 Priority Support', 'Commercial Use License', 'White-labeling'],
      cta: 'Upgrade Now',
      href: '/signup?plan=professional',
      variant: 'secondary' as const,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
                Find the Perfect Plan
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Start for free, support the community, or go pro. We have a plan that's right for you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {plans.map((plan) => (
                <Card key={plan.name} className={`flex flex-col h-full ${plan.isPwyw ? 'border-primary shadow-lg' : ''}`}>
                  <CardHeader className="text-center">
                    {plan.badge && <Badge className="mb-4 mx-auto">{plan.badge}</Badge>}
                    <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold">{plan.isPwyw ? <PwywSlider /> : plan.price}</span>
                      <span className="text-muted-foreground">{!plan.isPwyw && plan.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant={plan.variant}>
                      <Link href={plan.href}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card className="mt-12 bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground">
              <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-headline">Lifetime Deal (LTD)</h3>
                  <p className="opacity-90">
                    Get lifetime access to the Professional plan with a single one-time payment. Perfect for early adopters and power users.
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-4">
                  <p className="text-3xl font-bold">Just $299</p>
                   <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      <Link href="/signup?plan=ltd">Buy Now, Use Forever</Link>
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
