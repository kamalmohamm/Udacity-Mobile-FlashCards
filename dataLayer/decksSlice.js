import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  decks: [],
};

export const counterSlice = createSlice({
  name: "decks",
  initialState,
  reducers: {
    addDeck: (state, action) => {
      console.log("state", state, "action", action);
      const deckTitle = action.payload;
      state.decks.push({ title: deckTitle, cards: [] });
    },
    addCard: (state, action) => {
      const { cardQuestion, cardAnswer, deckTitle } = action.payload;
      state.decks
        .find((d) => d.title === deckTitle)
        .cards.push({ question: cardQuestion, answer: cardAnswer });
    },
  },
});

export const { addDeck, addCard } = counterSlice.actions;

export default counterSlice.reducer;
