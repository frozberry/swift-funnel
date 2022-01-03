import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

const data = [
  {
    webm: "/gifs/dive.webm",
    mp4: "/gifs/dive.mp4",
    copy: (
      <Typography variant="body1">
        <b>Diving Masterclass</b>: Learn to pull off athletic dives to save the
        rally. Then recover in the blink of an eye and get back in the rally.
      </Typography>
    ),
  },
  {
    webm: "/gifs/jump.webm",
    mp4: "/gifs/jump.mp4",
    copy: (
      <Typography variant="body1">
        <b>Explosive Strength</b>: A full strength-training program designed for
        badminton players - even if you&apos;ve never stepped foot in a gym.
      </Typography>
    ),
  },
  {
    webm: "/gifs/lunge.webm",
    mp4: "/gifs/lunge.mp4",
    copy: (
      <Typography variant="body1">
        <b>Mobility Manual</b>: A lower body mobility routine to help prevent
        injuries and prevent stiffness from hindering your footwork.
      </Typography>
    ),
  },
  {
    webm: "/gifs/kotc.webm",
    mp4: "/gifs/kotc.mp4",
    copy: (
      <Typography variant="body1">
        <b>Student Analysis</b>: I analyze video clips that other students have
        sent in, so you can see common mistakes at many different skill levels.
      </Typography>
    ),
  },
]

const Bonuses = () => {
  return (
    <Box mb="40px">
      <Typography variant="h3">
        <b>Bonus Courses</b>
      </Typography>

      <Typography variant="body1">
        When you sign up today, you also get access to these 4 bonus courses,
        valued at £438, <b>totally free of charge.</b>
      </Typography>
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            style={{ paddingBottom: 0 }}
            key={item.webm}
          >
            <div>
              <video autoPlay loop muted playsInline style={{ width: "100%" }}>
                <source src={item.webm} type="video/webm" />
                <source src={item.mp4} type="video/mp4" />
              </video>
            </div>
            {item.copy}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Bonuses
