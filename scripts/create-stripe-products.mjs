import Stripe from 'stripe';
import { loadOperatorEnv } from './lib/operator-env.mjs';

loadOperatorEnv();

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) throw new Error('Missing STRIPE_SECRET_KEY');

const stripe = new Stripe(secretKey);

const product = await stripe.products.create({
  name: 'Japanese Memory Game Plus',
  description: 'Advanced Japanese Memory Game content and features.',
  metadata: {
    app: 'japanese_memory_game',
    tier: 'plus',
  },
});

const monthly = await stripe.prices.create({
  product: product.id,
  currency: 'eur',
  unit_amount: 500,
  recurring: { interval: 'month' },
  nickname: 'Plus monthly',
  metadata: {
    app: 'japanese_memory_game',
    tier: 'plus',
    interval: 'monthly',
  },
});

const yearly = await stripe.prices.create({
  product: product.id,
  currency: 'eur',
  unit_amount: 3000,
  recurring: { interval: 'year' },
  nickname: 'Plus yearly',
  metadata: {
    app: 'japanese_memory_game',
    tier: 'plus',
    interval: 'yearly',
  },
});

console.log(JSON.stringify({
  productId: product.id,
  monthlyPriceId: monthly.id,
  yearlyPriceId: yearly.id,
}, null, 2));
