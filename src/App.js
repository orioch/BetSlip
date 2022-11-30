import MarketSelection from "./pages/MarketSelection";
import "./css/app.css";
import React from "react";
import BetSlipBar from "./components/Betslip/BetSlipBar";

function App() {
  return (
    <React.Fragment>
      <MarketSelection />
      <BetSlipBar />
    </React.Fragment>
  );
}

export default App;
