import React from "react";
import Market from "../components/Market";
import "../css/marketSelection.css";

export default function MarketSelection() {
  return (
    <div className="market-selection">
      <Market />
      <Market />
      <Market />
    </div>
  );
}
