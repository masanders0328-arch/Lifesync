import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft, RefreshCcw } from "lucide-react";

export default function PaymentCancel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:via-background dark:to-orange-950/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center" data-testid="card-payment-cancel">
        <CardHeader className="pb-4">
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
          <CardTitle className="text-2xl" data-testid="text-cancel-title">
            Payment Cancelled
          </CardTitle>
          <CardDescription className="text-base" data-testid="text-cancel-description">
            Your payment was not processed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            No worries! Your payment was cancelled and you haven't been charged. 
            You can try again whenever you're ready.
          </p>

          <div className="bg-muted/50 rounded-lg p-4 text-left">
            <h4 className="font-medium mb-2 text-sm">Need help?</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Check your payment method details</li>
              <li>Ensure you have sufficient funds</li>
              <li>Contact support if issues persist</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/#pricing">
              <Button className="w-full bg-gradient-to-r from-primary to-blue-500 border-0" data-testid="button-try-again">
                <RefreshCcw className="mr-2 w-4 h-4" />
                Try Again
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full" data-testid="button-back-home">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
