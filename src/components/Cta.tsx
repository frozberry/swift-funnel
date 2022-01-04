import Image from "next/image"
import axios from "axios"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import getStripe from "../lib/getStripe"

type Props = {
  sevenDays: boolean
  margin?: boolean
}

const CTA = ({ sevenDays, margin = false }: Props) => {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()

    const api = process.env.NEXT_PUBLIC_API!
    const response = await axios.post(`${api}/checkout/create-session/ff`)
    const checkoutSession = response.data

    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    })

    console.warn(error.message)
  }

  return (
    <Box
      sx={{
        my: "50px",
        mb: margin ? "50px" : "0px",
      }}
    >
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          color: "white",
          py: "1.5vh",
          px: "30px",
          textTransform: "none",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            id="buttonText"
            style={{
              fontWeight: "bold",
            }}
          >
            Get Instant Access
          </Typography>
          <Typography
            variant="body1"
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

      <Typography
        variant="body1"
        sx={{
          margin: "30px",
          textAlign: "center",
          color: "white",
        }}
      >
        100% Risk-free 60 Day Money-back Guarantee
      </Typography>
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "30%",
          height: "auto",
          display: "block",
        }}
      >
        <Image
          src="/images/accepted-cards.png"
          alt="Payment accepted"
          width={303}
          height={44}
          layout="responsive"
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          margin: "30px",
          textAlign: "center",
          color: "white",
        }}
      >
        Got a question? Email me: jonathan@swiftbadminton.com
      </Typography>

      {sevenDays && (
        <div className="wrapper">
          <div className="ddio_countdown_wrap" />
        </div>
      )}
    </Box>
  )
}

export default CTA
