import type { NextPage } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Link from "../components/Link"
import ProTip from "../components/ProTip"
import Copyright from "../components/Copyright"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Worksheets from "../components/Worksheets"
import Videos from "../components/Videos"
import Cta from "../components/Cta"
import VideoPlayer from "../components/VideoPlayer"
import SlowMotion from "../components/SlowMotion"
import Lcw from "../components/Lcw"
import SwiftChecklists from "../components/SwiftChecklists"
import Bonuses from "../components/Bonuses"
import Faq from "../components/Faq"

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg" sx={{}}>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        {/* <VideoPlayer /> */}
        <Cta sevenDays margin />
        <Intro />
        <Videos />
        <SlowMotion />
        <Lcw />
        <Worksheets />
        <SwiftChecklists />
        <Bonuses />
        <Cta sevenDays margin />

        <Faq />
      </Box>
    </Container>
  )
}

export default Home
