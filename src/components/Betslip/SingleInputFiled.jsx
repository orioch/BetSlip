import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useSelector, useDispatch } from "react-redux";
import {
  addSingle,
  changeValue,
  deletePackage,
} from "../../redux/features/betsSlice";

export default function SingleInputFiled({ bet }) {
  const dispatch = useDispatch();
  const { singles } = useSelector((store) => store.betsSlice);
  const [textValue, setTextValue] = useState(0);
  // on every change, we create a new single (don't worry about double singles, the reducer addSingle check if the single already exsist, and replace it if it is)
  const handleTextChange = (e) => {
    if (e == "+1") {
      dispatch(
        addSingle({
          bet: bet.bet,
          title: bet.title,
          value: Number(textValue) + 1,
        })
      );
      setTextValue(Number(textValue) + 1);
      return;
    }
    if (e == "-1") {
      dispatch(
        addSingle({
          bet: bet.bet,
          title: bet.title,
          value: Number(textValue) - 1,
        })
      );
      setTextValue(Number(textValue) - 1);
      return;
    }
    let value = e.target.value;
    if (!isNaN(value)) {
      setTextValue(value);
      dispatch(
        addSingle({
          bet: bet.bet,
          title: bet.title,
          value: Number(value),
        })
      );
    }
    if (value == "-") {
      setTextValue(value);
    }
  };
  return (
    <div className="content-row input-filed">
      <RemoveCircleIcon
        onClick={() => handleTextChange("-1")}
        style={{ color: "black" }}
      />
      <input value={textValue} onChange={handleTextChange} />
      <AddCircleIcon
        onClick={() => handleTextChange("+1")}
        style={{ color: "black" }}
      />
    </div>
  );
}
