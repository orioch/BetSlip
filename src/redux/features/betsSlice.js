import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const initialState = {
  betsData: {},
  counter: 0,
  valueCounter: 0,
  isWindowOpen: false,
  team1: "Team 1",
  team2: "Team 2",
};

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    openCloseBetslip: (state) => {
      state.isWindowOpen = !state.isWindowOpen;
    },
    addBet: (state, action) => {
      const { title, bet, value, isMultiselect } = action.payload;
      if (!state.betsData[title]) state.betsData[title] = [];
      // if multiselect enable, push to the array. else - replace the current bet with the new one
      if (isMultiselect) {
        state.valueCounter += Number(value);
        state.counter++;
        state.betsData[title].push({ title, bet, value });
      } else {
        if (state.betsData[title].length == 0) {
          state.counter++;
        } else {
          state.valueCounter -= Number(state.betsData[title][0].value);
        }
        state.valueCounter += Number(value);
        state.betsData[title] = [{ title, bet, value }];
      }
    },
    removeBet: (state, action) => {
      const { title, bet, value } = action.payload;
      state.valueCounter -= Number(value);
      state.counter--;
      const index = state.betsData[title].findIndex((item) => item.bet == bet);
      state.betsData[title].splice(index, 1);
    },
    changeValue: (state, action) => {
      state.valueCounter = Number(action.payload);
    },
    deletePackage: (state) => {
      state.betsData = {};
      state.counter = 0;
      state.valueCounter = 0;
    },
  },
});

export const {
  addBet,
  removeBet,
  openCloseBetslip,
  changeValue,
  deletePackage,
} = betsSlice.actions;
export default betsSlice.reducer;
