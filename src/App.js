import MarketSelection from "./pages/MarketSelection";
import "./css/app.css";
import React from "react";
import BetSlipBar from "./components/Betslip/BetSlipBar";
import BetslipPage from "./pages/BetslipPage";
import { useSelector, useDispatch } from "react-redux";
import { openCloseBetslip } from "./redux/features/betsSlice";

function App() {
  const dispatch = useDispatch();
  const { isWindowOpen } = useSelector((store) => store.betsSlice);
  return (
    <React.Fragment>
      <MarketSelection />
      <BetSlipBar />
      <div
        onClick={() => dispatch(openCloseBetslip())}
        className={`overlay ${!isWindowOpen}`}
      ></div>
      <BetslipPage />
    </React.Fragment>
  );
}

export default App;
