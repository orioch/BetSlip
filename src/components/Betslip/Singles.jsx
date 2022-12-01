import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import betsSlice from "../../redux/features/betsSlice";
import { combineArrays } from "../../utils/utilitis";
import Single from "./Single";
import Summary from "./Summary";
export default function Singles() {
  const { betsData } = useSelector((store) => store.betsSlice);
  const [singles, setSingles] = useState(combineArrays(betsData));

  useEffect(() => {
    setSingles(combineArrays(betsData));
  }, [betsData]);

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
      <AccordionDetails className="singles-content">
        {singles.length == 0 ? (
          <div className="content-row">No Bets Selected</div>
        ) : (
          singles.map((bet, index) => <Single key={bet.bet} bet={bet} />)
        )}
        <Summary />
      </AccordionDetails>
    </Accordion>
  );
}
