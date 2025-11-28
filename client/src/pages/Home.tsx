import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AIInsights } from "@/components/AIInsights";
import { Testimonials } from "@/components/Testimonials";
import { MiniGames } from "@/components/MiniGames";
import { FinancialCalculators } from "@/components/FinancialCalculators";
import { AffiliatePartners } from "@/components/AffiliatePartners";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <AIInsights />
        <MiniGames />
        <FinancialCalculators />
        <AffiliatePartners />
        <Testimonials />
        <Pricing />
        <About />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
