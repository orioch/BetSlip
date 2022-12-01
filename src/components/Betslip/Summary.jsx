import React from "react";
import { useSelector } from "react-redux";
import { calculateSinglesWin } from "../../utils/utilitis";
export default function Summary() {
  const { singles } = useSelector((store) => store.betsSlice);

  return (
    <div className="summary">
      <div className="total">
        You have {singles.length} Singles in total <br />
        Price - $
        {singles.reduce((currentValue, bet) => bet.value + currentValue, 0)}
      </div>
      <div className="win">You Can Win - ${calculateSinglesWin(singles)}</div>
    </div>
  );
}
