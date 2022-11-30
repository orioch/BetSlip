import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import MarketItem from "./marketSelection/MarketItem";

export default function MarketAccordion({ title, itemsInRow, itemsArray }) {
  // if some prop is undifined, use the default value to avoid errors
  if (!itemsInRow || itemsInRow > 3) itemsInRow = 3; // 3 is the default number of items in row. items in row cant be more then 3.
  if (itemsInRow < 2) itemsInRow = 2; // items in row cant be less then 2
  if (!title) title = "TITLE MISSING";
  return (
    <Accordion className="market-accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <h1>{title}</h1>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="content">
        {itemsArray.map((item) => (
          <MarketItem
            bet={item.bet}
            value={item.value}
            width={itemsInRow == 3 ? "130px" : "200px"}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
