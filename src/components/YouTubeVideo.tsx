import Container from "@mui/material/Container"
import ReactPlayer from "react-player"

type Props = {
  videoUrl: string
}

const FFVideo = ({ videoUrl }: Props) => {
  // This is probably not the best way to do center this, but it works for now
  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ReactPlayer url={videoUrl} height={480} width={852} controls />
    </Container>
  )
}

export default FFVideo
