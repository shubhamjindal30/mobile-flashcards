import { createSlice } from '@reduxjs/toolkit';

import { DecksObj, SetDecksAction } from './types';

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
    }) 
  }
});

export const { getDecks, setDecks } = deckSlice.actions;

export default deckSlice.reducer;
