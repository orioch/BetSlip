import React from "react";
import { useSelector } from "react-redux";
import InputFiled from "./InputFiled";
export default function Single({ bet }) {
  const { team1, team2 } = useSelector((store) => store.betsSlice);
  return (
    <div className="single">
      <h1>
        {bet.bet} - {bet.title}
      </h1>
      <h2>
        {team1} vs {team2}
      </h2>
      <InputFiled />
      <div className="orange-square">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur?
      </div>
    </div>
  );
}
