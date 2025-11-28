import { Card, CardContent } from "@/components/ui/card";
import { 
  Wallet, 
  LayoutGrid, 
  TrendingUp, 
  Briefcase, 
  BarChart3, 
  Shield,
  Zap,
  Clock,
  Target
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Finance Tracking",
    description: "Track income, expenses, and investments with beautiful visualizations. Set budgets and watch your wealth grow.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: LayoutGrid,
    title: "Project Management",
    description: "Organize tasks with Kanban boards, timelines, and smart prioritization. Never miss a deadline again.",
    gradient: "from-primary to-blue-600",
  },
  {
    icon: Briefcase,
    title: "Side Hustle Toolkit",
    description: "Manage multiple income streams, track client work, and scale your side projects into real businesses.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain insights with powerful dashboards. Understand trends, patterns, and opportunities in your data.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Track time across projects and activities. Optimize your schedule for maximum productivity.",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set SMART goals, track milestones, and celebrate achievements. Turn dreams into actionable plans.",
    gradient: "from-pink-500 to-rose-600",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-title">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Thrive
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
            Powerful tools designed for ambitious professionals who want to take control of their finances, 
            projects, and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent" data-testid="text-stat-users">
              10K+
            </div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent" data-testid="text-stat-projects">
              50K+
            </div>
            <div className="text-sm text-muted-foreground">Projects Managed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent" data-testid="text-stat-money">
              $2M+
            </div>
            <div className="text-sm text-muted-foreground">Money Tracked</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent" data-testid="text-stat-hours">
              100K+
            </div>
            <div className="text-sm text-muted-foreground">Hours Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
}
