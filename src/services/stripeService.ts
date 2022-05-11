import Stripe from "stripe"
import { CourseCode } from "../pages/api/stripe/checkout"

// eslint-disable-next-line
export const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: "2020-08-27",
})

export const createCheckoutSession = async (
  course: CourseCode,
  isIndia: boolean,
  returnPath: string
) => {
  let price

  if (isIndia) {
    if (course === "ff") {
      price = process.env.FF_PRICE_INR
    }
    // if (course === "pp") {
    //   price = process.env.FF_PRICE_INR
    // }
    // if (course === "pp") {
    //   price = process.env.KOTC_PRICE_INR
    // }
  } else {
    if (course === "ff") {
      price = process.env.FF_PRICE_GBP
    }
    // if (course === "pp") {
    //   price = process.env.PP_PRICE_GBP
    // }
    // if (course === "kotc") {
    //   price = process.env.KOTC_PRICE_GBP
    // }
  }

  const successUrl = process.env.NEXT_PUBLIC_VERCEL_URL!
  const cancelUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL!}/${returnPath}`

  const sessionData: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ["card"],
    line_items: [
      {
        price,
        quantity: 1,
      },
    ],
    mode: "payment",
    metadata: {},
    success_url: successUrl,
    cancel_url: cancelUrl,
    payment_intent_data: {
      setup_future_usage: "on_session",
    },
  }

  const session = await stripe.checkout.sessions.create(sessionData)
  return { id: session.id }
}
