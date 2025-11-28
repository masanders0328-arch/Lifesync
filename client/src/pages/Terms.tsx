import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-terms-title">
            Terms of Service
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none" data-testid="content-terms">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using LifeSync Pro, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, 
                non-transferable license to access and use LifeSync Pro for your personal or business purposes.
              </p>
              <p className="text-muted-foreground">
                This license does not include the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li>Modify or copy our software</li>
                <li>Use the service for any commercial resale</li>
                <li>Attempt to decompile or reverse engineer the software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Subscription and Payments</h2>
              <p className="text-muted-foreground mb-4">
                LifeSync Pro offers subscription-based access to premium features. By subscribing:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You authorize us to charge your payment method on a recurring basis</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>You may cancel at any time through your account settings</li>
                <li>Refunds are provided in accordance with our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. User Responsibilities</h2>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account. You agree to notify us immediately 
                of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                LifeSync Pro shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes via email or through the service. Continued use of the service after 
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions regarding these Terms of Service, please contact us at 
                <a href="mailto:legal@lifesyncpro.com" className="text-primary hover:underline ml-1">
                  legal@lifesyncpro.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
