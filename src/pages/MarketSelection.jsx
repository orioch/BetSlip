import React from "react";
import BetSlip from "../components/Betslip/BetSlip";
import MarketAccordion from "../components/MarketAccordion";
import "../css/marketSelection.css";

export default function MarketSelection() {
  let data = [
    {
      title: "MONEYLINE",
      itemsArray: [
        { bet: "Team 1", value: "+150" },
        { bet: "Draw", value: "+200" },
        { bet: "Team 2", value: "+235" },
      ],
      displayInOneRow: true,
    },
    {
      title: "BOTH TEAMS TO SCORE",
      itemsArray: [
        { bet: "Yes", value: "-110" },
        { bet: "No", value: "-120" },
      ],
      displayInOneRow: false,
    },
    {
      title: "ANY TIME GOALSCORER",
      itemsArray: [
        { bet: "Player 1", value: "+115" },
        { bet: "Player 2", value: "+200" },
        { bet: "Player 3", value: "+210" },
        { bet: "Player 4", value: "+250" },
        { bet: "Player 5", value: "+250" },
        { bet: "Player 6", value: "+300" },
        { bet: "Player 7", value: "+360" },
        { bet: "Player 8", value: "+500" },
        { bet: "Player 9", value: "+750" },
        { bet: "Player 10", value: "+780" },
        { bet: "Player 11", value: "+1000" },
        { bet: "Player 12", value: "+1100" },
      ],
      displayInOneRow: false,
      isMultiselect: true,
    },
  ];
  return (
    <div className="market-selection">
      {data.map((accordion, index) => (
        <MarketAccordion key={index} {...accordion} />
      ))}
      <BetSlip />
    </div>
  );
}
