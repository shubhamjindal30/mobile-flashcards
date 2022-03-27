import { PayloadAction } from '@reduxjs/toolkit';

export interface DecksObj {
  [k: string]: Deck;
}

export interface Question {
  question: string;
  answer: string;
}

export interface Deck {
  id: string;
  title: string;
  questions: Question[];
}

export interface SaveQuestionPayload {
  deckId: string;
  question: Question;
}

export type SetDecksAction = PayloadAction<DecksObj>;
export type SaveDeckAction = PayloadAction<string>;
export type SetDeckAction = PayloadAction<Deck>;
export type SaveQuestionAction = PayloadAction<SaveQuestionPayload>;
export type SetQuestionAction = PayloadAction<SaveQuestionPayload>;
export type DeleteDeckAction = PayloadAction<string>;
export type DeleteDeckFromStoreAction = PayloadAction<string>;
