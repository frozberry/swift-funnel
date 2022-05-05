import { NextRequest, NextResponse } from "next/server"

// Regex to check whether something has an extension, e.g. .jpg
const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { nextUrl, geo } = req
  const country = geo?.country?.toLowerCase() || "undefined"

  if (PUBLIC_FILE.test(nextUrl.pathname)) {
    return undefined
  }
  // Early return if this is an api route
  if (nextUrl.pathname.includes("/api")) {
    return undefined
  }

  return NextResponse.rewrite(`${nextUrl.pathname}?country=${country}`)
}
