import type { NextPage } from "next"
import Container from "@mui/material/Container"
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
import { ThinDiv, MediumDiv, Background } from "../components/Layout"

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
        <Cta margin />
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
      <Cta margin />
      <Background color="white">
        <MediumDiv>
          <Faq />
        </MediumDiv>
      </Background>
      <Cta />
    </Container>
  )
}

export default Home
