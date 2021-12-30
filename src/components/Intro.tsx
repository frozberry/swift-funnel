import Image from "next/image"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const img = {
  maxWidth: "75%",
  border: "3px solid rgb(158, 221, 248)",
  borderRadius: 7,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 20,
  marginBottom: 20,
}

const Intro = () => {
  return (
    <div>
      <Typography variant="h2">
        What If You Could Skyrocket Your Badminton Game With The Help Of a
        Proven System?
      </Typography>
      {/* <img
        src="https://i.imgur.com/bg3UYcg.png"
        alt="Footwork Fastlane"
        style={img}
      /> */}
      <Image
        src="/images/cover.png"
        alt="Footwork Fastlane"
        width={100}
        height={100}
      />
      <Container style={{ maxWidth: 748 }}>
        <Typography variant="body1">
          Introducing...The Footwork Fastlane:
        </Typography>
        <Typography variant="body1">
          <b>
            The only badminton course that teaches you how to build your
            footwork from the ground up.
          </b>
        </Typography>
        <Typography variant="body1">
          A system that works even if you can&rsquo;t afford to hire an
          expensive private coach and even if you have no idea where to start.
        </Typography>
        <Typography variant="body1">
          The Footwork Fastlane is a step by step system I&rsquo;ve created,
          that packages everything I&rsquo;ve learnt from over 10 years of
          experience playing and coaching badminton.
        </Typography>
        <Typography variant="body1">
          Instead of having to struggle for years like I had to, frustrated
          every step of the way - in this course, I will hold your hand and
          guide you down the &quot;fastlane&quot; to success. This will
          literally shave years of painful trial and error off the process.
        </Typography>
        <Typography variant="body1">
          The Footwork Fastlane is an &ldquo;all-inclusive&rdquo; course, that
          builds your footwork from the ground up, and teaches you everything
          you could possibly need or want to know.
        </Typography>
        <Typography variant="body1">
          You could be a complete beginner, but by the end of the course
          you&rsquo;ll be able to move around a badminton court with complete
          speed and precision.
        </Typography>
        <Typography variant="body1">
          For the next 7 days ONLY, I&rsquo;m opening up enrollment to the
          Footwork Fastlane for Swift Badminton subscribers only.
        </Typography>

        <Typography variant="body1">
          So if you&rsquo;re interested in taking your badminton game to the
          next level, click the button above and enroll right now. I&rsquo;ll
          see you in there!
        </Typography>
        <Typography variant="body1">
          <b>
            Have a question or concern about the program? Read the program
            details and FAQ below...
          </b>
        </Typography>
      </Container>
    </div>
  )
}

export default Intro
