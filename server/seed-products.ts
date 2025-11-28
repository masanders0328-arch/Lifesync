// Seed script to create Stripe products and prices
// Run with: npx tsx server/seed-products.ts
import { getUncachableStripeClient } from './stripeClient';

async function createProducts() {
  console.log('Creating LifeSync Pro products in Stripe...');
  
  const stripe = await getUncachableStripeClient();

  // Check if products already exist
  const existingProducts = await stripe.products.search({ query: "name:'LifeSync Pro'" });
  if (existingProducts.data.length > 0) {
    console.log('Products already exist, skipping creation');
    return;
  }

  // Basic Plan - $29/month
  console.log('Creating Basic plan...');
  const basicProduct = await stripe.products.create({
    name: 'LifeSync Pro Basic',
    description: 'Perfect for individuals getting started with productivity tracking',
    metadata: {
      plan: 'basic',
      features: JSON.stringify([
        'Finance tracking',
        'Up to 5 projects',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ])
    }
  });

  const basicMonthlyPrice = await stripe.prices.create({
    product: basicProduct.id,
    unit_amount: 2900, // $29.00
    currency: 'usd',
    recurring: { interval: 'month' },
    metadata: { plan: 'basic', billing: 'monthly' }
  });

  const basicYearlyPrice = await stripe.prices.create({
    product: basicProduct.id,
    unit_amount: 29000, // $290.00 (save ~17%)
    currency: 'usd',
    recurring: { interval: 'year' },
    metadata: { plan: 'basic', billing: 'yearly' }
  });

  console.log(`Basic plan created: ${basicProduct.id}`);
  console.log(`  Monthly: ${basicMonthlyPrice.id}`);
  console.log(`  Yearly: ${basicYearlyPrice.id}`);

  // Pro Plan - $79/month
  console.log('Creating Pro plan...');
  const proProduct = await stripe.products.create({
    name: 'LifeSync Pro',
    description: 'For professionals who want unlimited productivity features',
    metadata: {
      plan: 'pro',
      popular: 'true',
      features: JSON.stringify([
        'Everything in Basic',
        'Unlimited projects',
        'Side hustle toolkit',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Custom integrations'
      ])
    }
  });

  const proMonthlyPrice = await stripe.prices.create({
    product: proProduct.id,
    unit_amount: 7900, // $79.00
    currency: 'usd',
    recurring: { interval: 'month' },
    metadata: { plan: 'pro', billing: 'monthly' }
  });

  const proYearlyPrice = await stripe.prices.create({
    product: proProduct.id,
    unit_amount: 79000, // $790.00 (save ~17%)
    currency: 'usd',
    recurring: { interval: 'year' },
    metadata: { plan: 'pro', billing: 'yearly' }
  });

  console.log(`Pro plan created: ${proProduct.id}`);
  console.log(`  Monthly: ${proMonthlyPrice.id}`);
  console.log(`  Yearly: ${proYearlyPrice.id}`);

  // Enterprise Plan - $199/month
  console.log('Creating Enterprise plan...');
  const enterpriseProduct = await stripe.products.create({
    name: 'LifeSync Pro Enterprise',
    description: 'For teams and organizations that need advanced features',
    metadata: {
      plan: 'enterprise',
      features: JSON.stringify([
        'Everything in Pro',
        'White-label options',
        'Dedicated account manager',
        'Custom workflows',
        'SLA guarantee',
        'On-premise deployment',
        'Advanced security',
        'API access'
      ])
    }
  });

  const enterpriseMonthlyPrice = await stripe.prices.create({
    product: enterpriseProduct.id,
    unit_amount: 19900, // $199.00
    currency: 'usd',
    recurring: { interval: 'month' },
    metadata: { plan: 'enterprise', billing: 'monthly' }
  });

  const enterpriseYearlyPrice = await stripe.prices.create({
    product: enterpriseProduct.id,
    unit_amount: 199000, // $1990.00 (save ~17%)
    currency: 'usd',
    recurring: { interval: 'year' },
    metadata: { plan: 'enterprise', billing: 'yearly' }
  });

  console.log(`Enterprise plan created: ${enterpriseProduct.id}`);
  console.log(`  Monthly: ${enterpriseMonthlyPrice.id}`);
  console.log(`  Yearly: ${enterpriseYearlyPrice.id}`);

  console.log('\nAll products created successfully!');
  console.log('\nUpdate your Pricing.tsx with these price IDs:');
  console.log(`Basic Monthly: ${basicMonthlyPrice.id}`);
  console.log(`Basic Yearly: ${basicYearlyPrice.id}`);
  console.log(`Pro Monthly: ${proMonthlyPrice.id}`);
  console.log(`Pro Yearly: ${proYearlyPrice.id}`);
  console.log(`Enterprise Monthly: ${enterpriseMonthlyPrice.id}`);
  console.log(`Enterprise Yearly: ${enterpriseYearlyPrice.id}`);
}

createProducts().catch(console.error);
