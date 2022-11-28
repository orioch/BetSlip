import React from "react";

export default function MarketItem({ width, bet, value }) {
  return (
    <div className="market-item" style={{ width: width }}>
      <h1>{bet}</h1>
      <p>{value}</p>
    </div>
  );
}
