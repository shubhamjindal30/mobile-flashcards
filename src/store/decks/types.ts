import { PayloadAction } from '@reduxjs/toolkit';

export interface DecksObj {
  [k: string]: Deck;
}

export interface Deck {
  id: string;
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export type SetDecksAction = PayloadAction<DecksObj>;
export type SaveDeckAction = PayloadAction<string>;
export type SetDeckAction = PayloadAction<Deck>;
