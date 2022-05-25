import Container from "@mui/material/Container"
import type { NextPage } from "next"
import Bonuses from "../components/ff-landing/Bonuses"
import Cta from "../components/ff-landing/Cta"
import Faq from "../components/ff-landing/Faq"
import Header from "../components/ff-landing/Header"
import Intro from "../components/ff-landing/Intro"
import { Background, MediumDiv, ThinDiv } from "../components/ff-landing/Layout"
import Lcw from "../components/ff-landing/Lcw"
import SlowMotion from "../components/ff-landing/SlowMotion"
import SwiftChecklists from "../components/ff-landing/SwiftChecklists"
import VideoPlayer from "../components/ff-landing/VideoPlayer"
import Videos from "../components/ff-landing/Videos"
import Worksheets from "../components/ff-landing/Worksheets"

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
      <Cta margin />
      <Background color="white">
        <ThinDiv>
          <Intro deadline={false} />
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
