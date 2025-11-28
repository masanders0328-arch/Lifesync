// API routes for LifeSync Pro
// Reference: stripe blueprint, javascript_database blueprint
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getUncachableStripeClient, getStripePublishableKey } from "./stripeClient";
import { insertContactSchema, insertNewsletterSchema, PRICING_PLANS } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Get Stripe publishable key for frontend
  app.get("/api/stripe/config", async (req, res) => {
    try {
      const publishableKey = await getStripePublishableKey();
      res.json({ publishableKey });
    } catch (error: any) {
      console.error("Error getting Stripe config:", error);
      res.status(500).json({ error: "Failed to get Stripe configuration" });
    }
  });

  // Create checkout session for subscription
  app.post("/api/checkout", async (req, res) => {
    try {
      const { priceId, plan, email } = req.body;
      
      if (!priceId || !plan) {
        return res.status(400).json({ error: "Price ID and plan are required" });
      }

      const stripe = await getUncachableStripeClient();
      const host = req.headers.host || 'localhost:5000';
      const protocol = req.headers['x-forwarded-proto'] || 'https';
      const baseUrl = `${protocol}://${host}`;

      // Create checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${baseUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/payment/cancel`,
        customer_email: email,
        metadata: {
          plan: plan,
        },
      });

      res.json({ url: session.url, sessionId: session.id });
    } catch (error: any) {
      console.error("Checkout error:", error);
      res.status(500).json({ error: error.message || "Failed to create checkout session" });
    }
  });

  // Get checkout session status
  app.get("/api/checkout/session/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const stripe = await getUncachableStripeClient();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      
      res.json({
        status: session.status,
        customerEmail: session.customer_email,
        subscriptionId: session.subscription,
        plan: session.metadata?.plan,
      });
    } catch (error: any) {
      console.error("Session retrieval error:", error);
      res.status(500).json({ error: "Failed to retrieve session" });
    }
  });

  // Customer portal session
  app.post("/api/customer-portal", async (req, res) => {
    try {
      const { customerId } = req.body;
      
      if (!customerId) {
        return res.status(400).json({ error: "Customer ID is required" });
      }

      const stripe = await getUncachableStripeClient();
      const host = req.headers.host || 'localhost:5000';
      const protocol = req.headers['x-forwarded-proto'] || 'https';
      const baseUrl = `${protocol}://${host}`;

      const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${baseUrl}/dashboard`,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Customer portal error:", error);
      res.status(500).json({ error: "Failed to create portal session" });
    }
  });

  // Get pricing plans (static configuration)
  app.get("/api/pricing", async (req, res) => {
    try {
      // First try to get products from Stripe
      const products = await storage.listStripeProductsWithPrices(true);
      
      if (products && products.length > 0) {
        // Group products with their prices
        const productsMap = new Map();
        for (const row of products) {
          if (!productsMap.has(row.product_id)) {
            productsMap.set(row.product_id, {
              id: row.product_id,
              name: row.product_name,
              description: row.product_description,
              metadata: row.product_metadata,
              prices: []
            });
          }
          if (row.price_id) {
            productsMap.get(row.product_id).prices.push({
              id: row.price_id,
              unit_amount: row.unit_amount,
              currency: row.currency,
              recurring: row.recurring,
            });
          }
        }
        
        res.json({ plans: Array.from(productsMap.values()), source: 'stripe' });
      } else {
        // Fallback to static pricing if no Stripe products
        res.json({ plans: PRICING_PLANS, source: 'static' });
      }
    } catch (error: any) {
      console.error("Pricing fetch error:", error);
      // Fallback to static pricing on error
      res.json({ plans: PRICING_PLANS, source: 'static' });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ success: true, message: "Thank you for your message! We'll get back to you soon.", contact });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid form data", details: error.errors });
      }
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if already subscribed
      const existing = await storage.getNewsletterByEmail(validatedData.email);
      if (existing) {
        if (existing.subscribed) {
          return res.status(400).json({ error: "Email is already subscribed" });
        } else {
          // Re-subscribe
          await storage.createNewsletterSubscription(validatedData);
          return res.json({ success: true, message: "Welcome back! You've been re-subscribed." });
        }
      }
      
      const newsletter = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ success: true, message: "Successfully subscribed to our newsletter!", newsletter });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid email address" });
      }
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  });

  // Unsubscribe from newsletter
  app.post("/api/newsletter/unsubscribe", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
      
      await storage.unsubscribeNewsletter(email);
      res.json({ success: true, message: "Successfully unsubscribed from newsletter" });
    } catch (error: any) {
      console.error("Unsubscribe error:", error);
      res.status(500).json({ error: "Failed to unsubscribe" });
    }
  });

  return httpServer;
}
