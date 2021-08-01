import { createSelector } from "@reduxjs/toolkit";

export const decksSelector = (state) => state.decks.decks;

export const deckSelector = createSelector(
  [decksSelector, (_, deckTitle) => deckTitle],
  (decks, deckTitle) => decks.find((d) => d.title === deckTitle)
);

export const deckCardsSelector = createSelector(
  [deckSelector],
  (deck) => deck.cards
);

export const deckTitleSelector = createSelector(
  [deckSelector],
  (deck) => deck.cards
);

export const deckCardSelector = createSelector(
  [deckCardsSelector, (_, __, cardQuestion) => cardQuestion],
  (deckCards, cardQuestion) =>
    deckCards.find((dc) => dc.question === cardQuestion)
);
