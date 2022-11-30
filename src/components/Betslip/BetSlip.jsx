import React from "react";
import "../../css/betSlip.css";
import SlipCounter from "./SlipCounter";
import ValueCounter from "./ValueCounter";
export default function BetSlip() {
  return (
    <div className="betslip">
      <SlipCounter />
      <h1>Bet Slip</h1>
      <ValueCounter />
    </div>
  );
}
