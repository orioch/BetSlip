import React from "react";
import { useSelector } from "react-redux";

export default function BetslipPage() {
  const { isWindowOpen } = useSelector((store) => store.betsSlice);
  return (
    <div className={isWindowOpen ? "betslip-page open" : "betslip-page"}>
      BetslipPage
    </div>
  );
}
