import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useSelector, useDispatch } from "react-redux";
import { changeValue, deletePackage } from "../../redux/features/betsSlice";

export default function InputFiled() {
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
    <div className="content-row input-filed">
      <RemoveCircleIcon
        onClick={() => dispatch(changeValue(Number(valueCounter) - 1))}
        className="plus-minus-btn"
      />
      <input value={textValue} onChange={handleTextChange} />
      <AddCircleIcon
        onClick={() => dispatch(changeValue(Number(valueCounter) + 1))}
        className="plus-minus-btn"
      />
    </div>
  );
}
