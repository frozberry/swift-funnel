import type { NextApiRequest, NextApiResponse } from "next"

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const country = req.headers["x-vercel-ip-country-region"] || "none"
  console.log(country)

  const data = {
    link: "foo",
    country,
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
