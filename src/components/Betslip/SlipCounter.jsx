import React from "react";
import { useSelector } from "react-redux";
export default function SlipCounter() {
  const { counter } = useSelector((store) => store.betsSlice);
  return <span className="counter">{counter}</span>;
}
