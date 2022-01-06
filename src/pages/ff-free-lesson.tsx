import type { NextPage } from "next"
import Link from "next/link"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link as MuiLink } from "@mui/material/"
import YouTubeVideo from "../components/YouTubeVideo"
import { ThinDiv, MediumDiv } from "../components/Layout"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"

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
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "warning.main",
          height: "25px",
          width: "100%",
          pb: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <ErrorOutlineIcon
          sx={{
            color: "white",
            mt: {
              xs: "10px",
              sm: "12px",
            },
            mr: {
              xs: "1px",
              sm: "8px",
            },
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "white",
            textAlign: "center",
            mt: "6px",
          }}
        >
          Enrollment shuts tomorrow 11:59pm
        </Typography>
      </Container>

      <MediumDiv>
        <Typography
          variant="h2"
          sx={{
            mt: "20px",
            color: "white",
            opacity: "50%",
            fontWeight: "normal",
            fontSize: {
              xs: "1rem",
              sm: "1.25rem",
            },
          }}
        >
          Free Lesson from the Footwork Fastlane
        </Typography>
        <Typography
          variant="h1"
          sx={{
            mt: "10px",
            mb: "30px",
            fontSize: {
              xs: "1.5rem",
              sm: "2.5rem",
            },
          }}
        >
          Lesson 11: China Jump
        </Typography>

        <YouTubeVideo videoUrl="https://youtu.be/E7JCEPqo5Tg" />
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: "0px",
            mt: "20px",
          }}
        >
          PDF Worksheet
        </Typography>
        <MuiLink
          href="https://drive.google.com/file/d/1R9WpfISIU7mpwZr7xvCtAlaU74grVQ2m/view"
          rel="noopener"
          target="_blank"
        >
          China Jump
        </MuiLink>
      </MediumDiv>

      <Link href="https://www.swiftbadminton.com/ff" passHref>
        <Button
          variant="contained"
          sx={{
            color: "white",
            py: "1.5vh",
            px: "30px",
            textTransform: "none",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            my: "30px",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Yes, I want the full course
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                color: "white",
                mb: 0,
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              Click Here to Enroll Now and Reach Your Badminton Goals
            </Typography>
          </Box>
        </Button>
      </Link>
    </Container>
  )
}

export default Home
