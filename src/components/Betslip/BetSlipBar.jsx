import React, { useDebugValue } from "react";
import "../../css/betSlip.css";
import SlipCounter from "./SlipCounter";
import ValueCounter from "./ValueCounter";
import { useDispatch } from "react-redux";
import { openCloseBetslip } from "../../redux/features/betsSlice";
export default function BetSlipBar() {
  const dispatch = useDispatch();
  return (
    <div className="betslip-bar" onClick={() => dispatch(openCloseBetslip())}>
      <SlipCounter />
      <h1>Bet Slip</h1>
      <ValueCounter />
    </div>
  );
}
