import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const initialState = {
  betsData: [],
};

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    addBet: (state, action) => {
      state.betsData.push(action.payload);
    },
  },
});

export const { addBet } = betsSlice.actions;
export default betsSlice.reducer;
