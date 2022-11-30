import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBet, removeBet } from "../../redux/features/betsSlice";

export default function BetItem({ width, title, bet, value, isMultiselect }) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    if (active) {
      dispatch(removeBet({ title, bet, value }));
      setActive(false);
    } else {
      dispatch(addBet({ title, bet, value, isMultiselect }));
      setActive(true);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={active ? "bet-item active" : "bet-item"}
      style={{ width: width }}
    >
      <h1>{bet}</h1>
      <p>{value}</p>
    </div>
  );
}
