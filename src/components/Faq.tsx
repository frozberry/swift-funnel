import React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import faq from "../misc/FAQCopy"
import styles from "../misc/styles"

const container = {
  marginTop: 20,
  marginBottom: 20,
  borderRadius: 7,
}
const accordionStyle = {
  width: "100%",
  backgroundColor: "#385263",
  border: "none",
}
const answerBox = {
  paddingLeft: "10%",
  paddingRight: "10%",
  backgroundColor: styles.white,
}

const icon = {
  color: "white",
}

const FFFaq = ({ mobile }) => {
  const AccordionStyled = withStyles({
    root: accordionStyle,
    // expanded: { marginBottom: 80 },
  })(Accordion)

  const AccordionSummaryStyled = withStyles({
    // content: { marginTop: mobile ? 0 : 15, marginBottom: mobile ? 0 : 15 },
    // expanded: { marginTop: 12, marginBottom: 12 },
  })(AccordionSummary)

  const accordion = (faqObject) =>
    faqObject.map((item) => (
      // item is jsx, so key unique text is in props.children
      <React.Fragment key={item.question.props.children}>
        <AccordionStyled>
          <AccordionSummaryStyled expandIcon={<ExpandMoreIcon style={icon} />}>
            <div>{item.question}</div>
          </AccordionSummaryStyled>
          <AccordionDetails style={answerBox}>
            <div>{item.answer}</div>
          </AccordionDetails>
        </AccordionStyled>
      </React.Fragment>
    ))

  return (
    <div>
      <h2 style={styles.h2}>Frequently Asked Questions</h2>

      <div style={container}>
        <h3 style={styles.h3}>Course Questions</h3>
        {accordion(faq.courseFaq)}
      </div>

      <div style={container}>
        <h3 style={styles.h3}>Badminton Questions</h3>
        {accordion(faq.badmintonFaq)}
      </div>

      <div style={{ ...container, marginBottom: mobile ? 20 : 70 }}>
        <h3 style={styles.h3}>Enrollment Questions</h3>
        {accordion(faq.enrollmentFaq)}
      </div>
    </div>
  )
}

export default FFFaq
