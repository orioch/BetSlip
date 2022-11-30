import React from "react";
import step from "../../media/step.svg";
import line from "../../media/Line.svg";
import { useDispatch } from "react-redux";
import { removeBet } from "../../redux/features/betsSlice";

export default function PackageBetsList({ array }) {
  const dispatch = useDispatch();
  return array.map((bet, index) => {
    if (index == array.length - 1)
      return (
        <div className="content-row">
          <img
            onClick={() => dispatch(removeBet(bet))}
            className="step-img"
            src={step}
          />
          <div className="column">
            <span className="bet-selection">{bet.bet}</span>
            <span className="bet-title">{bet.title}</span>
          </div>
        </div>
      );
    return (
      <React.Fragment>
        {" "}
        <div className="content-row">
          <img
            onClick={() => dispatch(removeBet(bet))}
            className="step-img"
            src={step}
          />
          <div className="column">
            <span className="bet-selection">{bet.bet}</span>
            <span className="bet-title">{bet.title}</span>
          </div>
        </div>
        <img className="line-img" src={line} />
      </React.Fragment>
    );
  });
}
