import React from "react";
import { useSelector } from "react-redux";
import Package from "../components/Betslip/Package";
import Singles from "../components/Betslip/Singles";
import Summary from "../components/Betslip/Summary";

export default function BetslipPage() {
  const { isWindowOpen } = useSelector((store) => store.betsSlice);

  return (
    <div className={isWindowOpen ? "betslip-page open" : "betslip-page"}>
      <div className="title">
        <h1>Boleto</h1>
      </div>
      <Package />
      <Singles />
      <Summary />
    </div>
  );
}
