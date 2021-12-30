import React, { useState } from "react"
import axios from "axios"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Hidden from "@mui/material/Hidden"
import { loadStripe } from "@stripe/stripe-js"

const stripePublic = process.env.REACT_APP_STRIPE_PUBLIC
const stripePromise = loadStripe(stripePublic)

const img = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "30%",
  height: "auto",
  display: "block",
}

// eslint-disable-next-line react/prop-types
const CTA = ({ sevenDays, white, margin }) => {
  const [buttonColor, setButtonColor] = useState("#00FF00")

  const button = {
    backgroundColor: buttonColor,
    color: "white",
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
    paddingLeft: 30,
    paddingRight: 30,
    textTransform: "none",
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: margin ? "3vh" : null,
    display: "block",
  }

  const mainText = {
    // ...styles.p,
    // margin: 10,
    // textAlign: "center",
    // color: white ? "white" : styles.black,
  }

  const handleClick = async () => {
    const stripe = await stripePromise
    const api = process.env.REACT_APP_API
    const response = await axios.post(`${api}/checkout/create-session/ff`)

    const session = response.data
    await stripe.redirectToCheckout({
      sessionId: session.id,
    })
  }

  return (
    <div>
      <Button
        variant="contained"
        // onMouseEnter={() => setButtonColor(styles.greenLight)}
        // onMouseLeave={() => setButtonColor(styles.green)}
        // onClick={handleClick}
        // style={button}
      >
        <div>
          <Typography
            variant="h4"
            id="buttonText"
            style={{
              fontWeight: "bold",
            }}
          >
            Get Instant Access
          </Typography>
          <Hidden xsDown>
            <Typography variant="body1" style={{ fontSize: "1rem" }}>
              Click Here to Enroll Now and Reach Your Badminton Goals
            </Typography>
          </Hidden>
        </div>
      </Button>

      <p style={mainText}>100% Risk-free 60 Day Money-back Guarantee</p>
      <img
        src="https://i.imgur.com/CwwcSs9.png"
        alt="Payment accepted"
        style={img}
      />
      <p style={mainText}>
        Got a question? Email me: jonathan@swiftbadminton.com
      </p>

      <div className="wrapper">
        <div className="ddio_countdown_wrap" />
      </div>
    </div>
  )
}

export default CTA
