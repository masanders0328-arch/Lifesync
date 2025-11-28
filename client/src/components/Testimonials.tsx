import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    content: "LifeSync Pro completely transformed how I manage my work and side projects. The finance tracking alone has saved me hours every month.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Freelance Designer",
    company: "Self-employed",
    content: "As a freelancer juggling multiple clients, this tool is a lifesaver. The project management features are intuitive and powerful.",
    rating: 5,
    initials: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "StartupXYZ",
    content: "The analytics dashboard gives me insights I never knew I needed. I've increased my productivity by 40% since switching to LifeSync.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    company: "BigTech Inc",
    content: "Finally, an app that understands the needs of tech professionals. The side hustle toolkit helped me launch my consulting business.",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Amanda Foster",
    role: "Entrepreneur",
    company: "Foster Ventures",
    content: "I've tried dozens of productivity apps. LifeSync Pro is the only one that stuck. The goal tracking keeps me accountable every day.",
    rating: 5,
    initials: "AF",
  },
  {
    name: "James Wright",
    role: "Financial Analyst",
    company: "Investment Partners",
    content: "The finance features are incredibly robust. I use it for both personal budgeting and tracking my investment portfolio performance.",
    rating: 5,
    initials: "JW",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-description">
            Join professionals from top companies who've transformed their productivity with LifeSync Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-elevate border-border/50 bg-card"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-blue-500 text-white text-sm font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
