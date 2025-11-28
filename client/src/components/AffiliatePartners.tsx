import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const partners = [
  {
    id: "partner-1",
    name: "Financial Platform Partner",
    category: "Investment & Trading",
    description: "Premium investment tools and market analysis",
    badge: "Featured",
  },
  {
    id: "partner-2",
    name: "Budgeting Software",
    category: "Personal Finance",
    description: "Advanced budgeting and expense tracking",
    badge: "Popular",
  },
  {
    id: "partner-3",
    name: "Wealth Management",
    category: "Advisory Services",
    description: "Professional financial advisory and planning",
    badge: "New",
  },
  {
    id: "partner-4",
    name: "Crypto Trading",
    category: "Digital Assets",
    description: "Secure crypto portfolio management",
    badge: "Growing",
  },
];

export function AffiliatePartners() {
  const handlePartnerClick = (partnerId: string) => {
    trackEvent('affiliate_partner_clicked', 'partnerships', partnerId, 0);
    // Affiliate link will be stored and redirected here
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Affiliate Partners</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've partnered with industry leaders to provide exclusive deals and seamless integrations for our users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="p-6 hover-elevate transition-all cursor-pointer group"
              onClick={() => handlePartnerClick(partner.id)}
              data-testid={`card-partner-${partner.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <span className="text-xs font-bold text-white bg-primary px-3 py-1 rounded-full">
                  {partner.badge}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-1">{partner.name}</h4>
              <p className="text-sm text-primary font-medium mb-3">{partner.category}</p>
              <p className="text-muted-foreground text-sm mb-6">{partner.description}</p>
              <Button
                variant="ghost"
                className="w-full justify-between group-hover:gap-2 transition-all"
                data-testid={`button-partner-${partner.id}`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Become an Affiliate Partner</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Are you a financial service provider? Partner with LifeSync Pro to reach thousands of ambitious professionals.
          </p>
          <Button
            size="lg"
            onClick={() => {
              trackEvent('affiliate_inquiry', 'partnerships', 'become-partner', 0);
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            data-testid="button-become-partner"
          >
            Get in Touch
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Affiliate partner links will be activated shortly. Check back soon for exclusive offers!
          </p>
        </div>
      </div>
    </section>
  );
}
