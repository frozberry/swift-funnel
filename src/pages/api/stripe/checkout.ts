import type { NextApiRequest, NextApiResponse } from "next"
import { createCheckoutSession } from "../../../services/stripeService"

export type CourseCode = "ff" | "pp" | "kotc"

export type StripeCheckoutBody = {
  course: CourseCode
  returnPath: string
}

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { course, returnPath }: StripeCheckoutBody = req.body
  const country = req.headers["x-vercel-ip-country"] || "none"
  const isIndia = country === "IN"

  const session = await createCheckoutSession(course, isIndia, returnPath)
  res.send(session)
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      POST(req, res)
      break
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
