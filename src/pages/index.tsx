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
        <Intro />
        <Worksheets />

        {/* <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright /> */}
      </Box>
    </Container>
  )
}

export default Home
