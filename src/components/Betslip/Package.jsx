import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ctaImg from "../../media/redCta.svg";
import React from "react";
import { useSelector } from "react-redux";
import { combineArrays } from "../../utils/utilitis";
import PackageBetsList from "./PackageBetsList";
import InputFiled from "./InputFiled";

export default function Package() {
  const { counter, valueCounter, betsData } = useSelector(
    (store) => store.betsSlice
  );

  return (
    <Accordion disableGutters className="accordion">
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
      <AccordionDetails className="content">
        <div className="content-row">
          <img className="cta-img" src={ctaImg} />
          <span>{counter} selections</span>
        </div>
        <div
          className="content-row"
          style={{ justifyContent: "space-between" }}
        >
          <h1>Team 1 vs Team 2</h1>
          <h1>
            {" "}
            {valueCounter > 0 ? "+" : ""}
            {+valueCounter}
          </h1>
        </div>
        {}

        {/*  */}
        <PackageBetsList array={combineArrays(betsData)} />
        <InputFiled />
      </AccordionDetails>
    </Accordion>
  );
}
