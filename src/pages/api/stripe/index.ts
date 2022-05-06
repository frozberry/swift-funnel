import type { NextApiRequest, NextApiResponse } from "next"

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const country = req.headers["x-vercel-ip-country"] || "none"
  const gbp = "https://buy.stripe.com/9AQaIE0dH5VPctG6oo"
  const india = "https://buy.stripe.com/8wM0406C53NHeBO6or"

  const data = {
    link: country === "IN" ? india : gbp,
  }
  res.send(data)
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      GET(req, res)
      break
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
