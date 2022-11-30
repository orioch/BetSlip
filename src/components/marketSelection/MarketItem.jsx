import React, { useState } from "react";

export default function MarketItem({ width, bet, value }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div
      onClick={handleClick}
      className={active ? "market-item active" : "market-item"}
      style={{ width: width }}
    >
      <h1>{bet}</h1>
      <p>{value}</p>
    </div>
  );
}
