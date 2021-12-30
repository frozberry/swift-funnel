import Image from "next/image"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

function Worksheets() {
  const img = {
    maxHeight: "35vh",
    width: "auto",
    boxShadow: "0 15px 45px hsla(0,0%,0%, .3)",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
  return (
    <div>
      <Typography variant="h3">
        <b>Actionable Step-By-Step &quot;Accelerator Worksheets&quot;</b>
      </Typography>

      <Typography variant="body1">
        Every video comes with its own summary, so you can refer back to it
        later on to recap the best pieces of information.
      </Typography>

      <Typography variant="body1">
        On top of that, the worksheets also come with step-by-step “action
        steps” for you to follow. This takes all the complexity out of building
        your footwork, and allows you to literally follow a step by step process
        without stressing out or getting confused.
      </Typography>
      <img
        src="https://i.imgur.com/K0Net77.png"
        alt="PDF Worksheet"
        style={img}
      />
      <Image
        src="/worksheet.png"
        alt="PDF Worksheets"
        layout="intrinsic"
        width="100"
        height="100"
      />

      <Typography variant="body1">Over 40 pages of worksheets</Typography>

      <Typography variant="body1">
        Because I designed them specifically to be the perfect supplement to my
        course video modules. The action steps in the worksheets hold your hand
        through every step of the process...so you don&apos;t have to guess what
        to do at any point.
      </Typography>
      <Typography variant="body1">
        Now, all you have to do is follow the steps and by the end of the
        course, you’ll have fast and precise footwork - the best way of taking
        your badminton game to the next level.
      </Typography>
    </div>
  )
}

export default Worksheets
