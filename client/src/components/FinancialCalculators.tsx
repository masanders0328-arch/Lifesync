import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, PieChart, DollarSign } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const calculators = [
  {
    id: "retirement",
    name: "Retirement Calculator",
    description: "Plan your retirement savings and investment strategy",
    icon: TrendingUp,
    affiliate: true,
  },
  {
    id: "investment",
    name: "Investment Returns",
    description: "Calculate compound interest and investment growth",
    icon: DollarSign,
    affiliate: true,
  },
  {
    id: "budget",
    name: "Budget Planner",
    description: "Create and manage your monthly budget",
    icon: PieChart,
    affiliate: true,
  },
  {
    id: "tax",
    name: "Tax Calculator",
    description: "Estimate your tax liability and savings",
    icon: Calculator,
    affiliate: true,
  },
];

export function FinancialCalculators() {
  const handleCalculator = (id: string) => {
    trackEvent('calculator_clicked', 'financial', id, 0);
    // Placeholder for affiliate link - will be added via props or env var
  };

  return (
    <section className="py-20 md:py-32 bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Financial Calculators</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful financial tools to help you make informed decisions. Powered by our trusted affiliate partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {calculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Card
                key={calc.id}
                className="p-6 hover-elevate transition-all"
                data-testid={`card-calculator-${calc.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    AFFILIATE
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">{calc.name}</h4>
                <p className="text-muted-foreground text-sm mb-6">{calc.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleCalculator(calc.id)}
                  data-testid={`button-calculator-${calc.id}`}
                >
                  Open Calculator
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">
            Missing a calculator? We partner with leading financial platforms to bring you the best tools.
          </p>
          <p className="text-sm text-primary font-semibold">
            Affiliate links will be added shortly. Contact us to suggest a calculator!
          </p>
        </div>
      </div>
    </section>
  );
}
