import { Switch } from "@mui/material";
import React, { useState } from "react";

export default function MarketHeader() {
  const [gamesArray, setGamesArray] = useState([
    { text: "ipsum", selected: true },
    { text: "dolor", selected: false },
    { text: "sit", selected: false },
    { text: "amet", selected: false },
    { text: "consectetur", selected: false },
    { text: "adipisicing", selected: false },
    { text: "Lorem", selected: false },
    { text: "elit", selected: false },
    { text: "Recusandae", selected: false },
    { text: "tempore", selected: false },
    { text: "quas", selected: false },
    { text: "facilis", selected: false },
    { text: "alias", selected: false },
    { text: "assumenda", selected: false },
    { text: "magnam", selected: false },
    { text: "ipsam", selected: false },
    { text: "provident", selected: false },
  ]);
  const handleClick = (index) => {
    let newArray = [...gamesArray];
    newArray.forEach((item) => (item.selected = false));
    newArray[index].selected = true;
    setGamesArray(newArray);
  };
  return (
    <div className="market-header">
      <div className="radio-container">
        <h1>Lorem ipsum dolor sit.</h1>{" "}
        <Switch color="warning" defaultChecked />
      </div>
      <div className="games-slider">
        {gamesArray.map((item, index) => (
          <span
            onClick={() => handleClick(index)}
            className={item.selected ? "selected" : ""}
            key={index}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
