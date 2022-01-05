import type { NextPage } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { MediumDiv } from "../components/Layout"

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
      <MediumDiv>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            mt: {
              xs: "20px",
              sm: "40px",
            },
          }}
        >
          Sorry there was an unexpected error, your card has not been charged.
          Please try again or contact jonathan@swiftbadminton.com for help.
        </Typography>
      </MediumDiv>
    </Container>
  )
}

export default Home
