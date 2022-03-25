import { createSlice } from '@reduxjs/toolkit';

import { DecksObj, SaveDeckAction, SetDeckAction, SetDecksAction } from './types';

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
    setDecks: (state, action: SetDecksAction) => ({
      ...state,
      decks: action.payload
    }),
    saveDeck: (_state, _action: SaveDeckAction) => {},
    setDeck: (state, action: SetDeckAction) => ({
      ...state,
      decks: {
        ...state.decks,
        [action.payload.id]: action.payload
      }
    })
  }
});

export const { getDecks, setDecks, saveDeck, setDeck } = deckSlice.actions;

export default deckSlice.reducer;
