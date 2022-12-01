import MarketSelection from "./pages/MarketSelection";
import "./css/app.css";
import React from "react";
import BetSlipBar from "./components/Betslip/BetSlipBar";
import BetslipPage from "./pages/BetslipPage";
import { useSelector, useDispatch } from "react-redux";
import { openCloseBetslip } from "./redux/features/betsSlice";
import header from "./media/Header.svg";
import footer from "./media/footer.svg";
import stickyFooter from "./media/stickyFooter.svg";
function App() {
  const dispatch = useDispatch();
  const { isWindowOpen, counter } = useSelector((store) => store.betsSlice);
  return (
    <React.Fragment>
      <img className="header" src={header} />
      <MarketSelection />
      <div
        onClick={() => dispatch(openCloseBetslip())}
        className={`overlay ${!isWindowOpen}`}
      ></div>
      <BetSlipBar />
      <img className="sticky-footer" src={stickyFooter} />
      <img
        className={counter == 0 ? "footer" : "footer marg-up"}
        src={footer}
      />
      <BetslipPage />
    </React.Fragment>
  );
}

export default App;
