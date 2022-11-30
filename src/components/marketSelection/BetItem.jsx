import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBet, removeBet } from "../../redux/features/betsSlice";

export default function BetItem({ width, bet, value }) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    if (active) {
      dispatch(removeBet({ bet, value }));
      setActive(false);
    } else {
      dispatch(addBet({ bet, value }));
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
