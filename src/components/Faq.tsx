import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material"

import faq from "../lib/FaqCopy"
// import styles from "../misc/styles"

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
  // backgroundColor: styles.white,
}

const icon = {
  color: "white",
}

const Faq = () => {
  //   const AccordionStyled = withStyles({
  //     root: accordionStyle,
  //     // expanded: { marginBottom: 80 },
  //   })(Accordion)

  //   const AccordionSummaryStyled = withStyles({
  //     // content: { marginTop: mobile ? 0 : 15, marginBottom: mobile ? 0 : 15 },
  //     // expanded: { marginTop: 12, marginBottom: 12 },
  //   })(AccordionSummary)

  //   const accordion = (faqObject) =>
  //     faqObject.map((item) => (
  //       // item is jsx, so key unique text is in props.children
  //       <React.Fragment key={item.question.props.children}>
  //         <AccordionStyled>
  //           <AccordionSummaryStyled expandIcon={<ExpandMoreIcon style={icon} />}>
  //             <div>{item.question}</div>
  //           </AccordionSummaryStyled>
  //           <AccordionDetails style={answerBox}>
  //             <div>{item.answer}</div>
  //           </AccordionDetails>
  //         </AccordionStyled>
  //       </React.Fragment>
  //     ))

  return (
    <div>
      <Typography variant="h2">Frequently Asked Questions</Typography>

      <div style={container}>
        <Typography variant="h3">Course Questions</Typography>
        {/* {accordion(faq.courseFaq)} */}
      </div>

      <div style={container}>
        <Typography variant="h3">Badminton Questions</Typography>
        {/* {accordion(faq.badmintonFaq)} */}
      </div>

      {/* <div style={{ ...container, marginBottom: mobile ? 20 : 70 }}> */}
      <div style={{ ...container, marginBottom: 70 }}>
        <Typography variant="h3">Enrollment Questions</Typography>
        {/* {accordion(faq.enrollmentFaq)} */}
      </div>
    </div>
  )
}

export default Faq
