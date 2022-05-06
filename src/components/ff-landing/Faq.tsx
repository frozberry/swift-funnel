import React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import faq from "../lib/FaqCopy"

const Faq = () => {
  const accordion = (faqObject: any) =>
    faqObject.map((item: any) => (
      // item is jsx, so key unique text is in props.children
      <React.Fragment key={item.question.props.children}>
        <Accordion sx={{ width: "100%" }}>
          <AccordionSummary
            sx={{ backgroundColor: "#385263" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            <div>{item.question}</div>
          </AccordionSummary>
          <AccordionDetails sx={{ px: "10%" }}>
            <div>{item.answer}</div>
          </AccordionDetails>
        </Accordion>
      </React.Fragment>
    ))
  return (
    <Box>
      <Typography variant="h2">Frequently Asked Questions</Typography>

      <Box sx={{ mt: "20px", mb: "60px" }}>
        <Typography variant="h3">Course Questions</Typography>
        {accordion(faq.courseFaq)}
      </Box>

      <Box sx={{ mb: "60px" }}>
        <Typography variant="h3">Badminton Questions</Typography>
        {accordion(faq.badmintonFaq)}
      </Box>

      <Box sx={{ mb: "40px" }}>
        <Typography variant="h3">Enrollment Questions</Typography>
        {accordion(faq.enrollmentFaq)}
      </Box>
    </Box>
  )
}

export default Faq
