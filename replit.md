# LifeSync Pro - Productivity Platform

## Overview
LifeSync Pro is a comprehensive productivity platform for ambitious professionals to track finances, manage projects, and grow side hustles. The application features a modern landing page with Stripe payment integration, Google Analytics tracking, and a user dashboard.

## Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Tailwind CSS + Shadcn UI
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Payments**: Stripe (subscriptions via stripe-replit-sync)
- **Analytics**: Google Analytics 4
- **Routing**: Wouter

### Project Structure
```
├── client/src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── About.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Route pages
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   ├── PaymentSuccess.tsx
│   │   ├── PaymentCancel.tsx
│   │   ├── Privacy.tsx
│   │   └── Terms.tsx
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities (queryClient, analytics)
│   └── App.tsx          # Main app with routing
├── server/
│   ├── index.ts         # Express server entry
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Database operations
│   ├── db.ts            # Database connection
│   ├── stripeClient.ts  # Stripe configuration
│   └── webhookHandlers.ts
└── shared/
    └── schema.ts        # Database schema & types
```

## Key Features

### Landing Page
- Hero section with gradient background
- Feature cards showcasing capabilities
- Customer testimonials
- Pricing tiers (Basic $29, Pro $79, Enterprise $199)
- About/values section
- Newsletter signup
- Contact form
- Footer with navigation

### Stripe Integration
- Three subscription tiers (Basic, Pro, Enterprise)
- Monthly and annual billing
- Stripe Checkout for payments
- Webhook handling via stripe-replit-sync
- Customer portal for subscription management

### Database Schema
- `users`: User accounts with Stripe customer IDs
- `subscriptions`: Subscription tracking
- `contacts`: Contact form submissions
- `newsletters`: Newsletter subscribers
- `payments`: Payment history

### Analytics
- Google Analytics 4 integration
- Page view tracking
- Event tracking (CTAs, conversions)
- Purchase/subscription tracking

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `VITE_GA_MEASUREMENT_ID`: Google Analytics 4 Measurement ID
- Stripe credentials via Replit connector

## API Endpoints

### Public
- `POST /api/contact`: Submit contact form
- `POST /api/newsletter`: Subscribe to newsletter
- `POST /api/newsletter/unsubscribe`: Unsubscribe
- `GET /api/pricing`: Get pricing plans
- `GET /api/stripe/config`: Get Stripe public key

### Payments
- `POST /api/checkout`: Create checkout session
- `GET /api/checkout/session/:sessionId`: Get session status
- `POST /api/customer-portal`: Create portal session
- `POST /api/stripe/webhook/:uuid`: Stripe webhooks

## Development

### Running Locally
The app runs via `npm run dev` which starts both Express and Vite servers on port 5000.

### Database Migrations
```bash
npm run db:push  # Push schema changes
```

### Seeding Stripe Products
```bash
npx tsx server/seed-products.ts  # Create products in Stripe
```

## Stripe Price IDs
- Basic Monthly: price_1SYGfvClUg17WbDFhwKMyR22
- Basic Yearly: price_1SYGfvClUg17WbDFxV40QdF4
- Pro Monthly: price_1SYGfwClUg17WbDFXDRElepP
- Pro Yearly: price_1SYGfwClUg17WbDFJ1aFuGuz
- Enterprise Monthly: price_1SYGfwClUg17WbDFX9rRNzVI
- Enterprise Yearly: price_1SYGfwClUg17WbDF0YPxtTyw

## Design System
See `design_guidelines.md` for complete design documentation including:
- Typography (Inter font)
- Color palette (blue primary theme)
- Component styling
- Responsive breakpoints
- Animation guidelines
