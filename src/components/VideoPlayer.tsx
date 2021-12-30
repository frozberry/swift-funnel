import ReactPlayer from "react-player/wistia"
import Container from "@mui/material/Container"

const styles = {
  wrapper: {
    position: "relative",
    paddingTop: "56.25%",
    marginBottom: 40,
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}

const VideoPlayer = () => {
  return (
    <Container maxWidth="lg">
      <div style={styles.wrapper}>
        <ReactPlayer
          url="https://swiftbadminton.wistia.com/medias/v37i7ucb0f"
          style={styles.player}
          width="100%"
          height="100%"
          pip={true}
          volume={0.5}
          config={{
            options: {
              // playbar: true,
              resumable: true,
              fullscreenButton: true,
              volumeControl: true,
              // autoPlay: true,
              googleAnalytics: true,
            },
          }}
        />
      </div>
    </Container>
  )
}

export default VideoPlayer
