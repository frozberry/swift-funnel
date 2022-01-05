import type { NextPage } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
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
          Sorry, enrollment for this course has now closed.
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          Keep an eye on your inbox for free training emails and special offers
          in the future.
        </Typography>
      </ThinDiv>
    </Container>
  )
}

export default Home
