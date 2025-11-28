import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const handleGetStarted = () => {
    trackEvent('cta_click', 'hero', 'get_started');
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    trackEvent('cta_click', 'hero', 'watch_demo');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0tNiA2aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/10 text-white border-white/20 backdrop-blur-sm" data-testid="badge-hero">
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by 10,000+ professionals
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
            Master Your Life.
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Achieve Balance.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
            The all-in-one productivity platform for ambitious professionals. 
            Track finances, manage projects, and grow your side hustles—all in one beautifully designed space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 border-0"
              data-testid="button-hero-get-started"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWatchDemo}
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              data-testid="button-hero-watch-demo"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 rounded-t-lg">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-gray-500">LifeSync Pro Dashboard</span>
              </div>
              <div className="aspect-video bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-6 w-full max-w-4xl">
                  <div className="col-span-2 bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="h-4 w-24 bg-slate-700 rounded mb-3" />
                    <div className="flex gap-4">
                      <div className="flex-1 h-32 bg-gradient-to-t from-primary/20 to-primary/5 rounded" />
                      <div className="flex-1 h-32 bg-gradient-to-t from-blue-500/20 to-blue-500/5 rounded" />
                      <div className="flex-1 h-32 bg-gradient-to-t from-cyan-500/20 to-cyan-500/5 rounded" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="h-3 w-16 bg-slate-700 rounded mb-2" />
                      <div className="h-6 w-20 bg-green-500/30 rounded" />
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="h-3 w-16 bg-slate-700 rounded mb-2" />
                      <div className="h-6 w-16 bg-primary/30 rounded" />
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="h-3 w-16 bg-slate-700 rounded mb-2" />
                      <div className="h-6 w-12 bg-blue-500/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
