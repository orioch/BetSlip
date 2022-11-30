import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ctaImg from "../../media/redCta.svg";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { combineArrays } from "../../utils/utilitis";
import PackageBetsList from "./PackageBetsList";
import InputFiled from "./InputFiled";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { deletePackage } from "../../redux/features/betsSlice";

export default function Package() {
  const dispatch = useDispatch();
  const { counter, valueCounter, betsData, team1, team2 } = useSelector(
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
        <RiDeleteBin6Fill
          onClick={() => dispatch(deletePackage())}
          size={30}
          className="delete-icon"
        />
        <div className="content-row">
          <img className="cta-img" src={ctaImg} />
          <span>{counter} selections</span>
        </div>
        <div
          className="content-row"
          style={{ justifyContent: "space-between" }}
        >
          <h1>
            {team1} vs {team2}
          </h1>
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
        <div className="orange-square">Lorem ipsum dolor sit amet.</div>
      </AccordionDetails>
    </Accordion>
  );
}
