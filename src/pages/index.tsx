import type { NextPage } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

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

type BgProps = {
  color: string
}

const ThinDiv: React.FC = ({ children }) => (
  <Container maxWidth={false} sx={{ maxWidth: "800px" }}>
    {children}
  </Container>
)

const MediumDiv: React.FC = ({ children }) => (
  <Container maxWidth="md">{children}</Container>
)

const Background: React.FC<BgProps> = ({ color, children }) => (
  <Container
    maxWidth={false}
    disableGutters
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: color,
      py: "50px",
    }}
  >
    {children}
  </Container>
)

const Home: NextPage = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThinDiv>
        <Header />
      </ThinDiv>
      <VideoPlayer />
      <ThinDiv>
        <Cta sevenDays margin />
      </ThinDiv>
      <Background color="white">
        <ThinDiv>
          <Intro />
        </ThinDiv>
      </Background>
      <Background color="bgLight.main">
        <ThinDiv>
          <Videos />
        </ThinDiv>
      </Background>
      <Background color="white">
        <ThinDiv>
          <SlowMotion />
          <Lcw />
          <Worksheets />
          <SwiftChecklists />
          <Bonuses />
        </ThinDiv>
      </Background>
      <Cta sevenDays margin />
      <Background color="white">
        <MediumDiv>
          <Faq />
        </MediumDiv>
      </Background>
      <Cta sevenDays />
    </Container>
  )
}

export default Home
