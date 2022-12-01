import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InputFiled from "./InputFiled";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { removeBet } from "../../redux/features/betsSlice";
import SingleInputFiled from "./SingleInputFiled";
export default function Single({ bet }) {
  const { team1, team2 } = useSelector((store) => store.betsSlice);
  const dispatch = useDispatch();
  return (
    <div className="full-single-container">
      <div className="single-top-container">
        <div className="single">
          <h1>
            {bet.bet} - {bet.title}
          </h1>
          <h2>
            {team1} vs {team2}
          </h2>
          <SingleInputFiled bet={bet} />
        </div>
        <div className="right-column">
          <RiDeleteBin6Fill
            onClick={() => {
              dispatch(removeBet(bet));
            }}
            size={30}
            index
            className="delete-icon"
          />
          <h1>
            {" "}
            {bet.value > 0 ? "+" : ""}
            {+bet.value}
          </h1>
        </div>
      </div>
      <div className="orange-square">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur?
      </div>
    </div>
  );
}
