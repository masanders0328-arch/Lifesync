import { useEffect, useState } from "react";
import { Link, useSearch } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { trackConversion } from "@/lib/analytics";

export default function PaymentSuccess() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const sessionId = params.get("session_id");
  const [tracked, setTracked] = useState(false);

  const { data: session, isLoading } = useQuery({
    queryKey: ['/api/checkout/session', sessionId],
    queryFn: async () => {
      if (!sessionId) return null;
      const response = await fetch(`/api/checkout/session/${sessionId}`);
      return response.json();
    },
    enabled: !!sessionId,
  });

  useEffect(() => {
    if (session && !tracked) {
      trackConversion(sessionId || 'unknown', 79, 'USD');
      setTracked(true);
    }
  }, [session, sessionId, tracked]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-background to-blue-50 dark:from-green-950/20 dark:via-background dark:to-blue-950/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center" data-testid="card-payment-success">
        <CardHeader className="pb-4">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <CardTitle className="text-2xl" data-testid="text-success-title">
            Payment Successful!
          </CardTitle>
          <CardDescription className="text-base" data-testid="text-success-description">
            Thank you for subscribing to LifeSync Pro
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : session ? (
            <div className="bg-muted/50 rounded-lg p-4 text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Plan</span>
                <span className="font-medium capitalize" data-testid="text-success-plan">
                  {session.plan || 'Pro'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium" data-testid="text-success-email">
                  {session.customerEmail || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-600" data-testid="text-success-status">
                  Active
                </span>
              </div>
            </div>
          ) : null}

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              You now have full access to all LifeSync Pro features. 
              Start exploring your new productivity toolkit!
            </p>
            
            <div className="flex flex-col gap-3">
              <Link href="/dashboard">
                <Button className="w-full bg-gradient-to-r from-primary to-blue-500 border-0" data-testid="button-go-dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full" data-testid="button-back-home">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
