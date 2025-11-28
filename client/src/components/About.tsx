import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to help professionals achieve work-life balance through smart productivity tools.",
  },
  {
    icon: Users,
    title: "User-Focused",
    description: "Every feature we build starts with understanding our users' real needs and challenges.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously push the boundaries of what productivity software can do.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We believe in building a supportive community of ambitious professionals.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-about-title">
              Built for{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Ambitious Professionals
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description-1">
              LifeSync Pro was born from a simple observation: modern professionals juggle more than ever before. 
              Between day jobs, side projects, personal finances, and life goals, it's easy to feel overwhelmed.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description-2">
              We built LifeSync Pro to be the single source of truth for everything that matters. 
              Our platform brings together finance tracking, project management, and goal setting 
              in one beautifully designed space—so you can focus on what really matters: achieving your dreams.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-background border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1" data-testid="text-about-stat-founded">2023</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1" data-testid="text-about-stat-team">12</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1" data-testid="text-about-stat-countries">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1" data-testid="text-about-stat-satisfaction">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="hover-elevate border-border/50"
                data-testid={`card-value-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
