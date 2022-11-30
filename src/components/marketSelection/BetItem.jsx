import React, { useState } from "react";

export default function BetItem({ width, bet, value }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
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
