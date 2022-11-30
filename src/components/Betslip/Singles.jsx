import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
export default function Singles() {
  return (
    <Accordion disableGutters className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordion-title"
      >
        <Typography>
          <h1>Singles</h1>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>test</AccordionDetails>
    </Accordion>
  );
}
