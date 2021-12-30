import Typography from "@mui/material/Typography"

const LCW = () => {
  const img = {
    width: "80%",
    height: "auto",

    marginBottom: 20,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
  return (
    <div>
      <Typography variant="h3">
        <b>Lee Chong Wei Analysis</b>
      </Typography>
      <video autoPlay loop muted playsInline style={img}>
        <source src="gifs/lcw.webm" type="video/webm" />
        <source src="gifs/lcw.mp4" type="video/mp4" />
      </video>

      <Typography variant="body1">
        After each lesson, we&apos;ll recap the key concepts. But unlike any old
        recap, we’re going to analyse and dissect Lee Chong Wei demonstrating
        the relevant techniques from an up close, side on camera angle, to
        highlight the key points from each lesson.
      </Typography>
      <Typography variant="body1">
        They say to be like the best you have to learn from the best. But
        players of ALL skill levels can learn a lot by copying top players. And
        I directly relate it to the concepts covered in each lesson, so
        you&apos;ll never feel overwhelmed.
      </Typography>
    </div>
  )
}

export default LCW
