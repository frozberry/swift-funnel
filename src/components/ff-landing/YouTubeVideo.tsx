import Container from "@mui/material/Container"
import ReactPlayer from "react-player/youtube"
// import ReactPlayer from "react-player/wistia"
import Box from "@mui/material/Box"

type Props = {
  videoUrl: string
}

const FFVideo = ({ videoUrl }: Props) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          position: "relative",
          pt: "56.25%",
        }}
      >
        <ReactPlayer
          url={videoUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          width="100%"
          height="100%"
          controls
        />
      </Box>
    </Container>
  )
}

export default FFVideo
