import { Plan } from '@typebot.io/prisma'
import type { Stripe } from 'stripe'

export const prices = {
  [Plan.STARTER]: 39,
  [Plan.PRO]: 89,
} as const

export const chatsLimits = {
  [Plan.FREE]: 20,
  [Plan.STARTER]: 200,
  [Plan.PRO]: 5000,
} as const

export const seatsLimits = {
  [Plan.FREE]: 1,
  [Plan.OFFERED]: 1,
  [Plan.STARTER]: 2,
  [Plan.PRO]: 5,
  [Plan.LIFETIME]: 8,
} as const

export const starterChatTiers = [
  {
    up_to: 500,
    flat_amount: 0,
  },
  {
    up_to: 700,
    flat_amount: 1000,
  },
  {
    up_to: 1000,
    flat_amount: 2000,
  },
  {
    up_to: 1200,
    flat_amount: 3000,
  },
  {
    up_to: 1500,
    flat_amount: 4000,
  },
  {
    up_to: 'inf',
    unit_amount: 2,
  },
] satisfies Stripe.PriceCreateParams.Tier[]

export const proChatTiers = [
  {
    up_to: 7000,
    flat_amount: 0,
  },
  {
    up_to: 9000,
    flat_amount: 5000,
  },
  {
    up_to: 10000,
    flat_amount: 9500,
  },
  {
    up_to: 15000,
    flat_amount: 18000,
  },
  {
    up_to: 20000,
    flat_amount: 26000,
  },
  {
    up_to: 25000,
    flat_amount: 33500,
  },
  {
    up_to: 60000,
    flat_amount: 40700,
  },
  {
    up_to: 70000,
    flat_amount: 47700,
  },
  {
    up_to: 80000,
    flat_amount: 54500,
  },
  {
    up_to: 90000,
    flat_amount: 61100,
  },
  {
    up_to: 100000,
    flat_amount: 67500,
  },
  {
    up_to: 120000,
    flat_amount: 79900,
  },
  {
    up_to: 140000,
    flat_amount: 91900,
  },
  {
    up_to: 160000,
    flat_amount: 103700,
  },
  {
    up_to: 180000,
    flat_amount: 115300,
  },
  {
    up_to: 200000,
    flat_amount: 126700,
  },
  {
    up_to: 300000,
    flat_amount: 181700,
  },
  {
    up_to: 400000,
    flat_amount: 234700,
  },
  {
    up_to: 500000,
    flat_amount: 285700,
  },
  {
    up_to: 600000,
    flat_amount: 335700,
  },
  {
    up_to: 700000,
    flat_amount: 384700,
  },
  {
    up_to: 800000,
    flat_amount: 432700,
  },
  {
    up_to: 900000,
    flat_amount: 479700,
  },
  {
    up_to: 1000000,
    flat_amount: 525700,
  },
  {
    up_to: 1200000,
    flat_amount: 617100,
  },
  {
    up_to: 1400000,
    flat_amount: 707900,
  },
  {
    up_to: 1600000,
    flat_amount: 797900,
  },
  {
    up_to: 1800000,
    flat_amount: 887300,
  },
  {
    up_to: 'inf',
    unit_amount_decimal: '0.442',
  },
] satisfies Stripe.PriceCreateParams.Tier[]
