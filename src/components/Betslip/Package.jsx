import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ctaImg from "../../media/redCta.svg";
import step from "../../media/step.svg";
import line from "../../media/Line.svg";
import React from "react";
import { useSelector } from "react-redux";

export default function Package() {
  const { counter } = useSelector((store) => store.betsSlice);
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
          <h1>+237</h1>
        </div>
        <div className="content-row">
          <img className="step-img" src={step} />
          <span className="bet-title">title</span>
          <span className="bet-selection">bet</span>
        </div>
        <img className="line-img" src={line} />
        <div className="content-row">
          <img className="step-img" src={step} />
          <span>{counter} selections</span>
        </div>
        <img className="line-img" src={line} />
        <div className="content-row">
          <img className="step-img" src={step} />
          <span>{counter} selections</span>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
