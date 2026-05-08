import Stripe from 'stripe';
import { getStripeEnv } from './env';

export function createStripe() {
  return new Stripe(getStripeEnv().stripeSecretKey);
}
