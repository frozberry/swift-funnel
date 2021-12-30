import Typography from "@mui/material/Typography"

const SlowMotion = () => {
  const img = {
    marginBottom: 30,

    width: "80%",
    height: "auto",

    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }

  return (
    <div>
      <Typography variant="h3">
        <b>Buttery Smooth Slo-Mo Breakdown</b>
      </Typography>

      <Typography variant="body1">
        Each lesson is accompanied by a silky smooth, crystal clear slow motion
        demonstration. Shot at a dedicated 120fps.
      </Typography>

      <video autoPlay loop muted playsInline style={img}>
        <source src="/gifs/slow-motion-def.webm" type="video/webm" />
        <source src="/gifs/slow-motion-def.mp4" type="video/mp4" />
      </video>

      <Typography variant="body1">
        As someone who’s spent more time combing through potato quality YouTube
        footage frame by frame than any human should, I wanted to give you a
        great video resource that you can simply copy.
      </Typography>
      <Typography variant="body1">
        And don’t worry, this isn’t the crappy missed slow motion that you
        commonly see on YouTube - where someone has just stretched out a regular
        video.
      </Typography>

      <Typography variant="body1">
        I’ve specifically shot 120fps HD video for buttery smooth playback.
        You’ll see every detail of the movement exactly, and fast track your
        progress by just COPYING what you see on the screen.
      </Typography>
    </div>
  )
}

export default SlowMotion
