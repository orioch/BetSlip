import MarketSelection from "./pages/MarketSelection";
import "./css/app.css";
import React, { useEffect } from "react";
import BetSlipBar from "./components/Betslip/BetSlipBar";
import BetslipPage from "./pages/BetslipPage";
import { useSelector, useDispatch } from "react-redux";
import { openCloseBetslip } from "./redux/features/betsSlice";
import header from "./media/Header.svg";
import footer from "./media/footer.svg";
import stickyFooter from "./media/stickyFooter.svg";
import MarketHeader from "./components/marketSelection/MarketHeader";
function App() {
  const dispatch = useDispatch();
  const { isWindowOpen, counter } = useSelector((store) => store.betsSlice);

  useEffect(() => {
    if (isWindowOpen) {
      document.body.classList.remove("enable-scroll");
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
      document.body.classList.add("enable-scroll");
    }
  }, [isWindowOpen]);

  return (
    <React.Fragment>
      <img className="header" src={header} />
      <MarketHeader />
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
