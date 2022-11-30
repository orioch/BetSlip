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
    removeBet: (state, action) => {
      const index = state.betsData.findIndex(
        (item) => item.bet == action.payload.bet
      );
      state.betsData.splice(index, 1);
    },
  },
});

export const { addBet, removeBet } = betsSlice.actions;
export default betsSlice.reducer;
