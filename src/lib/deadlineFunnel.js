const deadlineFunnel = `function SendUrlToDeadlineFunnel(e) {
  var r,
    t,
    c,
    a,
    h,
    n,
    o,
    A,
    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    d = 0,
    l = 0,
    s = "",
    u = []
  if (!e) return e
  do
    (r = e.charCodeAt(d++)),
      (t = e.charCodeAt(d++)),
      (c = e.charCodeAt(d++)),
      (A = (r << 16) | (t << 8) | c),
      (a = (A >> 18) & 63),
      (h = (A >> 12) & 63),
      (n = (A >> 6) & 63),
      (o = 63 & A),
      (u[l++] = i.charAt(a) + i.charAt(h) + i.charAt(n) + i.charAt(o))
  while (d < e.length)
  s = u.join("")
  var C = e.length % 3
  var decoded = (C ? s.slice(0, C - 3) : s) + "===".slice(C || 3)
  decoded = decoded.replace("+", "-")
  decoded = decoded.replace("/", "_")
  return decoded
}
var dfUrl = SendUrlToDeadlineFunnel(location.href)
var dfParentUrlValue
try {
  dfParentUrlValue = window.parent.location.href
} catch (err) {
  if (err.name === "SecurityError") {
    dfParentUrlValue = document.referrer
  }
}
var dfParentUrl =
  parent !== window ? "/" + SendUrlToDeadlineFunnel(dfParentUrlValue) : ""
;(function () {
  var s = document.createElement("script")
  s.type = "text/javascript"
  s.async = true
  s.setAttribute("data-scriptid", "dfunifiedcode")
  const url =
      "https://a.deadlinefunnel.com/unified/reactunified.bundle.js?userIdHash=eyJpdiI6IjdyVDRPTGltQUZicFwvYjFBendsWWx3PT0iLCJ2YWx1ZSI6InNSWDRDZWpnT0YrSmhWYkF5aEptM1E9PSIsIm1hYyI6IjE4OGIzNTM1OGUxOGZkYzJjNjNmZWRlNmJkZjU0ZjY5ZjZhMjRjYjI0Nzg1MmVhMjdhYzQwNmFiOGZkYzkyYjMifQ==&pageFromUrl=" +
      dfUrl +
      "&parentPageFromUrl=" +
      dfParentUrl
      console.log(url)
  s.src = url
  var s2 = document.getElementsByTagName("script")[0]
  s2.parentNode.insertBefore(s, s2)
})()`
export default deadlineFunnel
