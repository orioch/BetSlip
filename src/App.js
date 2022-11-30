import MarketSelection from "./pages/MarketSelection";
import "./css/app.css";
import React from "react";
import BetSlipBar from "./components/Betslip/BetSlipBar";
import BetslipPage from "./pages/BetslipPage";
import { useSelector } from "react-redux";

function App() {
  const { isWindowOpen } = useSelector((store) => store.betsSlice);
  return (
    <React.Fragment>
      <MarketSelection />
      <BetSlipBar />
      <div className={`overlay ${!isWindowOpen}`}></div>
      <BetslipPage />
    </React.Fragment>
  );
}

export default App;
