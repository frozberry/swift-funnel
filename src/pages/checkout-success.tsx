import type { NextPage } from "next"
import Link from "next/link"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { ThinDiv } from "../components/Layout"

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
        <Typography variant="h1" sx={{ mt: "40px", mb: "20px" }}>
          Congratulations on enrolling!
        </Typography>
        <Link href="https://app.swiftbadminton.com/" passHref>
          <Button
            variant="contained"
            sx={{
              py: "10px",
              my: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              textAlign: "center",
              maxWidth: "300px",
            }}
          >
            Click here to access your course
          </Button>
        </Link>
        <Typography sx={{ color: "white" }}>
          If don&apos;t already have a Swift Badminton account, you can find
          your login details in your email.
        </Typography>
        <Typography sx={{ color: "white" }}>
          Existing users: you may need to log out and log back in to access your
          new course.
        </Typography>
      </ThinDiv>
    </Container>
  )
}

export default Home
