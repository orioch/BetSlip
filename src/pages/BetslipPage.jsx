import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Package from "../components/Betslip/Package";
import Singles from "../components/Betslip/Singles";
import { deletePackage, openCloseBetslip } from "../redux/features/betsSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function BetslipPage() {
  const { isWindowOpen, betsData, singles } = useSelector(
    (store) => store.betsSlice
  );
  const dispatch = useDispatch();
  const sendData = () => {
    console.log({ package: betsData, singles });
    dispatch(openCloseBetslip());
    setTimeout(() => {
      dispatch(deletePackage());
    }, 400);
  };
  return (
    <div className={isWindowOpen ? "betslip-page open" : "betslip-page"}>
      <div
        onClick={() => dispatch(openCloseBetslip())}
        className="title-continer"
      >
        <div className="title">
          <ChevronLeftIcon className="title-icon" />
          <h1>Boleto</h1>
        </div>
      </div>

      <Package />
      <Singles />

      <div className="checkbox-container">
        <input type="checkbox" name="checkbox1" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem ipsum dolor sit.</label>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" name="checkbox2" id="checkbox2" />
        <label htmlFor="checkbox2">
          Lorem ipsum dolor sit amet consectetur
        </label>
      </div>
      <div className="btn-container">
        <button onClick={sendData} className="submit-btn">
          {" "}
          Place Bets
        </button>
      </div>
    </div>
  );
}
