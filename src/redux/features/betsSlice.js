import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const initialState = {
  betsData: {},
  counter: 0,
};

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    addBet: (state, action) => {
      const { title, bet, value, isMultiselect } = action.payload;
      if (!state.betsData[title]) state.betsData[title] = [];
      // if multiselect enable, push to the array. else - replace the current bet with the new one
      if (isMultiselect) {
        state.counter++;
        state.betsData[title].push({ bet, value });
      } else {
        if (state.betsData[title].length == 0) state.counter++;
        state.betsData[title] = [{ bet, value }];
      }
    },
    removeBet: (state, action) => {
      state.counter--;
      const { title, bet, value } = action.payload;
      const index = state.betsData[title].findIndex((item) => item.bet == bet);
      state.betsData[title].splice(index, 1);
    },
  },
});

export const { addBet, removeBet } = betsSlice.actions;
export default betsSlice.reducer;
