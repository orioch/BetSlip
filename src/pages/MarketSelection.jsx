import React from "react";
import MarketAccordion from "../components/MarketAccordion";
import "../css/marketSelection.css";

export default function MarketSelection() {
  return (
    <div className="market-selection">
      <MarketAccordion title="MONEYLINE" itemsInRow={2} />
      <MarketAccordion title="BOTH TEAMS TO SCORE" />
      <MarketAccordion title="ANY TIME GOALSCORER" />
    </div>
  );
}
