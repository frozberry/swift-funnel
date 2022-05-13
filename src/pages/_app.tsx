import { CacheProvider, EmotionCache } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import PlausibleProvider from "next-plausible"
import { AppProps } from "next/app"
import Head from "next/head"
import theme from "../../styles/theme"
import createEmotionCache from "../lib/createEmotionCache"
import deadlineFunnel from "../lib/deadlineFunnel"
import "../styles.css"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Footwork Fastlane</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <script type="text/javascript" data-cfasync="false">
          {deadlineFunnel}
        </script>
      </Head>
      <PlausibleProvider domain="swiftbadminton.com">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </PlausibleProvider>
    </CacheProvider>
  )
}
