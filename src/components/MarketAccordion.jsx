import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import BetItem from "./marketSelection/BetItem";
import ctaImg from "../media/cta.svg";
export default function MarketAccordion({
  title,
  displayInOneRow,
  itemsArray,
  isMultiselect,
}) {
  // if some prop is undifined, use the default value to avoid errors
  if (!displayInOneRow) displayInOneRow = false;
  if (!title) title = "TITLE MISSING";
  if (!isMultiselect) isMultiselect = false;
  return (
    <Accordion disableGutters className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordion-title"
      >
        <Typography>
          <h1>{title}</h1>
        </Typography>
        <img className="cta-img" src={ctaImg} />
      </AccordionSummary>
      <AccordionDetails className={displayInOneRow ? "content row" : "content"}>
        {itemsArray.map((item) => (
          <BetItem
            key={item.title + item.bet + item.value}
            bet={item.bet}
            value={item.value}
            isMultiselect={isMultiselect}
            title={title}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
