import { configureStore } from "@reduxjs/toolkit";
import betsSliceReducer from "./features/betsSlice";
export const store = configureStore({
  reducer: {
    betsSlice: betsSliceReducer,
  },
});
