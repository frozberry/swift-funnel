import Image from "next/image"
import axios from "axios"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import getStripe from "../../lib/getStripe"
import { useRouter } from "next/router"

type Props = {
  sevenDays?: boolean
  margin?: boolean
}

const CTA = ({ sevenDays = false, margin = false }: Props) => {
  const router = useRouter()

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()

    const res = await axios.get("/api/stripe?course=ff")
    router.push(res.data.link)

    // const api = process.env.NEXT_PUBLIC_API!
    // const response = await axios.post(`${api}/checkout/create-session/ff`)
    // const checkoutSession = response.data

    // const stripe = await getStripe()
    // const { error } = await stripe!.redirectToCheckout({
    //   sessionId: checkoutSession.id,
    // })

    // console.warn(error.message)
  }

  return (
    <Box
      sx={{
        mt: {
          xs: "20px",
          sm: "50px",
        },
        mb: {
          xs: margin ? "20px" : "0px",
          sm: margin ? "50px" : "0px",
        },
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
            sx={{
              fontWeight: "bold",
            }}
          >
            Get Instant Access
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

      <Typography
        variant="body1"
        sx={{
          margin: {
            xs: "10px",
          },
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
          margin: {
            xs: "10px",
          },
          textAlign: "center",
          color: "white",
        }}
      >
        Got a question? Email me: jonathan@swiftbadminton.com
      </Typography>

      {sevenDays && (
        <Box
          className="wrapper"
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            width: {
              xs: "60%",
              sm: "50%",
            },
          }}
        >
          <div className="ddio_countdown_wrap" />
        </Box>
      )}
    </Box>
  )
}

export default CTA
