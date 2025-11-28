import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, AlertCircle, Zap } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/lib/analytics";

export function AIInsights() {
  const [isLoading, setIsLoading] = useState(false);

  const insightsMutation = useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      try {
        const response = await apiRequest("POST", "/api/ai/financial-insights", {
          financialData:
            "User is tracking finances, managing side hustles, and wants to grow investments",
        });
        return response.insights;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      trackEvent("ai_insights_generated", "automation", "financial", 0);
    },
  });

  const recommendationsMutation = useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      try {
        const response = await apiRequest("POST", "/api/ai/goal-recommendations", {
          userContext: "User wants to improve finances, grow side hustle, and track goals",
        });
        return response.recommendations;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      trackEvent("ai_recommendations_generated", "automation", "goals", 0);
    },
  });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 to-blue-500/5 border-t border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Automation</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized recommendations powered by advanced AI. Our system analyzes your goals,
            finances, and activity to provide actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Financial Insights */}
          <Card className="p-6 hover-elevate transition-all" data-testid="card-ai-financial">
            <div className="flex items-start justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full dark:text-green-400 dark:bg-green-950">
                FINANCIAL
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Financial Insights</h3>
            <p className="text-muted-foreground text-sm mb-6">
              AI analyzes your spending, income, and investments to provide personalized financial
              recommendations.
            </p>
            <Button
              onClick={() => insightsMutation.mutate()}
              disabled={insightsMutation.isPending || isLoading}
              className="w-full"
              data-testid="button-generate-insights"
            >
              {insightsMutation.isPending ? "Analyzing..." : "Generate Insights"}
            </Button>
          </Card>

          {/* Goal Recommendations */}
          <Card className="p-6 hover-elevate transition-all" data-testid="card-ai-goals">
            <div className="flex items-start justify-between mb-4">
              <Zap className="w-8 h-8 text-yellow-500" />
              <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full dark:text-yellow-400 dark:bg-yellow-950">
                GOALS
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Goals</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Get AI-recommended goals tailored to your profile, interests, and financial situation.
            </p>
            <Button
              onClick={() => recommendationsMutation.mutate()}
              disabled={recommendationsMutation.isPending || isLoading}
              className="w-full"
              data-testid="button-generate-recommendations"
            >
              {recommendationsMutation.isPending ? "Generating..." : "Get Recommendations"}
            </Button>
          </Card>

          {/* 24/7 AI Assistant */}
          <Card className="p-6 hover-elevate transition-all" data-testid="card-ai-chat">
            <div className="flex items-start justify-between mb-4">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                ASSISTANT
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Chat with our AI assistant 24/7 for personalized guidance on finances, goals, and
              productivity.
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-testid="button-open-assistant"
            >
              Open Chat
            </Button>
          </Card>
        </div>

        {/* Results Display */}
        {(insightsMutation.data || recommendationsMutation.data) && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightsMutation.data && (
              <Card className="p-6 bg-card border-primary/20" data-testid="card-insights-result">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-green-500" />
                  Your Financial Insights
                </h4>
                <div className="text-sm text-muted-foreground space-y-3">
                  {typeof insightsMutation.data === "string" ? (
                    <p>{insightsMutation.data}</p>
                  ) : (
                    JSON.stringify(insightsMutation.data, null, 2)
                  )}
                </div>
              </Card>
            )}

            {recommendationsMutation.data && (
              <Card className="p-6 bg-card border-primary/20" data-testid="card-recommendations-result">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Your Recommended Goals
                </h4>
                <div className="text-sm text-muted-foreground space-y-3">
                  {typeof recommendationsMutation.data === "string" ? (
                    <p>{recommendationsMutation.data}</p>
                  ) : (
                    JSON.stringify(recommendationsMutation.data, null, 2)
                  )}
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
