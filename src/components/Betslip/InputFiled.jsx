import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeValue } from "../../redux/features/betsSlice";
export default function InputFiled(handleFunction) {
  const dispatch = useDispatch();
  const { valueCounter } = useSelector((store) => store.betsSlice);
  const [textValue, setTextValue] = useState(valueCounter);
  useEffect(() => {
    setTextValue(valueCounter);
  }, [valueCounter]);

  const handleTextChange = (e) => {
    let value = e.target.value;
    if (!isNaN(value)) {
      setTextValue(value);
      dispatch(changeValue(value));
    }
    if (value == "-") {
      setTextValue(value);
    }
  };
  return (
    <div className="content-row">
      <RemoveCircleIcon
        onClick={() => dispatch(changeValue(Number(valueCounter) - 1))}
        style={{ color: "black" }}
      />
      <input value={textValue} onChange={handleTextChange} />
      <AddCircleIcon
        onClick={() => dispatch(changeValue(Number(valueCounter) + 1))}
        style={{ color: "black" }}
      />
    </div>
  );
}
