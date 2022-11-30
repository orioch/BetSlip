import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBet, removeBet } from "../../redux/features/betsSlice";
import { useSelector } from "react-redux";

export default function BetItem({ width, title, bet, value, isMultiselect }) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { betsData } = useSelector((store) => store.betsSlice);

  //this useEffect change the active state according to betsData
  useEffect(() => {
    if (!betsData[title]) setActive(false);
    else {
      if (betsData[title].some((item) => item.bet == bet)) setActive(true);
      else {
        setActive(false);
      }
    }
  }, [betsData[title]]);

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
