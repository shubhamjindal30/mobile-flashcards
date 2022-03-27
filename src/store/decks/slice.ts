import { createSlice } from '@reduxjs/toolkit';

import {
  Deck,
  DecksObj,
  DeleteDeckAction,
  DeleteDeckFromStoreAction,
  SaveDeckAction,
  SaveQuestionAction,
  SetDeckAction,
  SetDecksAction,
  SetQuestionAction
} from './types';

interface DeckState {
  decks: DecksObj;
}

const initialState: DeckState = {
  decks: {}
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    getDecks: () => {},
    setDecks: (state, action: SetDecksAction) => {
      state.decks = action.payload;
    },
    saveDeck: (_state, _action: SaveDeckAction) => {},
    setDeck: (state, action: SetDeckAction) => {
      state.decks[action.payload.id] = action.payload;
    },
    saveQuestion: (_state, _action: SaveQuestionAction) => {},
    setQuestion: (state, action: SetQuestionAction) => {
      const deck: Deck | undefined = state.decks && state.decks[action.payload.deckId];
      if (deck) {
        deck.questions.push(action.payload.question);
        state.decks[deck.id] = deck;
      }
    },
    deleteDeck: (_state, _action: DeleteDeckAction) => {},
    deleteDeckFromStore: (state, action: DeleteDeckFromStoreAction) => {
      const deck: Deck | undefined = state.decks && state.decks[action.payload];
      if (deck) delete state.decks[deck.id];
    }
  }
});

export const {
  getDecks,
  setDecks,
  saveDeck,
  setDeck,
  saveQuestion,
  setQuestion,
  deleteDeck,
  deleteDeckFromStore
} = deckSlice.actions;

export default deckSlice.reducer;
