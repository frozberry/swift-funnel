import Container from "@mui/material/Container"
import type { GetServerSideProps, NextPage } from "next"
import Bonuses from "../components/Bonuses"
import Cta from "../components/Cta"
import Faq from "../components/Faq"
import Header from "../components/Header"
import Intro from "../components/Intro"
import { Background, MediumDiv, ThinDiv } from "../components/Layout"
import Lcw from "../components/Lcw"
import SlowMotion from "../components/SlowMotion"
import SwiftChecklists from "../components/SwiftChecklists"
import VideoPlayer from "../components/VideoPlayer"
import Videos from "../components/Videos"
import Worksheets from "../components/Worksheets"

const Home: NextPage<Props> = () => {
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
