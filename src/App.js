import MarketSelection from "./pages/MarketSelection";
import "./css/app.css";
import BetSlip from "./components/Betslip/BetSlip";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MarketSelection />
      <BetSlip />
    </React.Fragment>
  );
}

export default App;
