import type { NextApiRequest, NextApiResponse } from "next"

const courses = {
  ff: {
    gbp: "https://buy.stripe.com/9AQaIE0dH5VPctG6oo",
    india: "https://buy.stripe.com/8wM0406C53NHeBO6or",
  },
  pp: {
    gbp: "https://buy.stripe.com/28obMI4tX1FzfFS6ot",
    india: "https://buy.stripe.com/eVa6so8Kd4RLdxKeV1",
  },
  kotc: {
    gbp: "https://buy.stripe.com/dR6aIEgcFesl1P26ou",
    india: "https://buy.stripe.com/4gwdUQ5y1esl1P26ow",
  },
}

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const country = req.headers["x-vercel-ip-country"] || "none"
  const isIndia = country === "IN"
  const { course } = req.query

  if (course === "ff") {
    const data = {
      link: isIndia ? courses.ff.india : courses.ff.gbp,
    }
    res.send(data)
  }

  if (course === "pp") {
    const data = {
      link: isIndia ? courses.pp.india : courses.pp.gbp,
    }
    res.send(data)
  }

  if (course === "kotc") {
    const data = {
      link: isIndia ? courses.kotc.india : courses.kotc.gbp,
    }
    res.send(data)
  }

  res.status(400).end("Invalid course")
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
