import Stripe from 'stripe';
import { getStripeSecretEnv } from './env';

export function createStripe(secretKey = getStripeSecretEnv().stripeSecretKey) {
  return new Stripe(secretKey);
}
