import React, { useDebugValue } from "react";
import "../../css/betSlip.css";
import SlipCounter from "./SlipCounter";
import ValueCounter from "./ValueCounter";
import { useDispatch, useSelector } from "react-redux";
import { openCloseBetslip } from "../../redux/features/betsSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export default function BetSlipBar() {
  const { isWindowOpen } = useSelector((store) => store.betsSlice);
  const dispatch = useDispatch();
  return (
    <div className="betslip-bar" onClick={() => dispatch(openCloseBetslip())}>
      <SlipCounter />
      <h1>Bet Slip</h1>
      <ValueCounter />
      <ChevronLeftIcon
        className={`arrow${isWindowOpen ? " right" : " left"}`}
      />
    </div>
  );
}
