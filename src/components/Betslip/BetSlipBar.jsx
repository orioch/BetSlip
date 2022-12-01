import React, { useDebugValue, useEffect, useState } from "react";
import "../../css/betSlip.css";
import SlipCounter from "./SlipCounter";
import ValueCounter from "./ValueCounter";
import { useDispatch, useSelector } from "react-redux";
import { openCloseBetslip } from "../../redux/features/betsSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export default function BetSlipBar() {
  const { isWindowOpen, counter } = useSelector((store) => store.betsSlice);
  const dispatch = useDispatch();

  //display bar only if counter > 0
  const [displayBar, setDisplayBar] = useState(false);
  useEffect(() => {
    if (counter > 0) setDisplayBar(true);
    else {
      if (isWindowOpen) {
        dispatch(openCloseBetslip());
        setTimeout(() => {
          setDisplayBar(false);
        }, 1000);
      } else {
        setDisplayBar(false);
      }
    }
  }, [counter]);

  return (
    <div
      className={displayBar ? "betslip-bar display" : "betslip-bar"}
      onClick={() => dispatch(openCloseBetslip())}
    >
      <SlipCounter />
      <h1>Bet Slip</h1>
      <ValueCounter />
      <ChevronLeftIcon
        className={`arrow${isWindowOpen ? " right" : " left"}`}
      />
    </div>
  );
}
