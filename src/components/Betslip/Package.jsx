import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export default function Package() {
  return (
    <Accordion disableGutters className="package">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordion-title"
      >
        <Typography>
          <h1>Package</h1>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>test</AccordionDetails>
    </Accordion>
  );
}
