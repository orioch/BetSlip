import React from "react";
import { useSelector } from "react-redux";
export default function ValueCounter() {
  const { valueCounter } = useSelector((store) => store.betsSlice);
  return (
    <div className="counter value">
      {valueCounter > 0 ? "+" : ""}
      {+valueCounter}
    </div>
  );
}
