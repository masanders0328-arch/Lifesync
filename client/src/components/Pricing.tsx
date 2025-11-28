import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Sparkles } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { trackEvent, trackSubscription } from "@/lib/analytics";

const plans = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for individuals getting started",
    monthlyPrice: 29,
    yearlyPrice: 290,
    monthlyPriceId: "price_1SYGfvClUg17WbDFhwKMyR22",
    yearlyPriceId: "price_1SYGfvClUg17WbDFxV40QdF4",
    features: [
      "Finance tracking",
      "Up to 5 projects",
      "Basic analytics",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For professionals who want more",
    monthlyPrice: 79,
    yearlyPrice: 790,
    monthlyPriceId: "price_1SYGfwClUg17WbDFXDRElepP",
    yearlyPriceId: "price_1SYGfwClUg17WbDFJ1aFuGuz",
    features: [
      "Everything in Basic",
      "Unlimited projects",
      "Side hustle toolkit",
      "Advanced analytics",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For teams and organizations",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    monthlyPriceId: "price_1SYGfwClUg17WbDFX9rRNzVI",
    yearlyPriceId: "price_1SYGfwClUg17WbDF0YPxtTyw",
    features: [
      "Everything in Pro",
      "White-label options",
      "Dedicated account manager",
      "Custom workflows",
      "SLA guarantee",
      "On-premise deployment",
      "Advanced security",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { toast } = useToast();

  const checkoutMutation = useMutation({
    mutationFn: async (plan: { id: string; priceId: string; price: number }) => {
      const response = await apiRequest("POST", "/api/checkout", {
        priceId: plan.priceId,
        plan: plan.id,
      });
      return response.json();
    },
    onSuccess: (data) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: (error: any) => {
      toast({
        title: "Checkout Error",
        description: error.message || "Failed to start checkout. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (plan: typeof plans[0]) => {
    const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
    trackEvent('pricing_click', 'subscription', plan.id, price);
    trackSubscription(plan.id, price);
    
    if (plan.id === "enterprise") {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const priceId = isAnnual ? plan.yearlyPriceId : plan.monthlyPriceId;
    
    checkoutMutation.mutate({
      id: plan.id,
      priceId: priceId,
      price: price,
    });
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-pricing-title">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-pricing-description">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              data-testid="switch-billing-toggle"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-600 border-green-500/20">
                Save 17%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`relative hover-elevate transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-lg shadow-primary/10 scale-[1.02] md:scale-105' 
                  : 'border-border/50'
              }`}
              data-testid={`card-pricing-${plan.id}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-blue-500 text-white border-0 px-4">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl" data-testid={`text-pricing-name-${plan.id}`}>
                  {plan.name}
                </CardTitle>
                <CardDescription data-testid={`text-pricing-description-${plan.id}`}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-6">
                  <span className="text-4xl font-bold" data-testid={`text-pricing-price-${plan.id}`}>
                    ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground" data-testid={`text-pricing-feature-${plan.id}-${featureIndex}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-blue-500 border-0' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleSubscribe(plan)}
                  disabled={checkoutMutation.isPending}
                  data-testid={`button-pricing-${plan.id}`}
                >
                  {checkoutMutation.isPending ? "Loading..." : plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include: SSL encryption, 99.9% uptime SLA, and automatic backups.
            <br />
            Need something custom?{" "}
            <a 
              href="#contact" 
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
