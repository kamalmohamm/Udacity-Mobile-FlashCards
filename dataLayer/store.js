import { configureStore } from "@reduxjs/toolkit";
import decksReucer from "./decksSlice";

export const store = configureStore({
  reducer: { decks: decksReucer },
});
