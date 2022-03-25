import { PayloadAction } from '@reduxjs/toolkit';

export interface DecksObj {
  [k: string]: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

export type SetDecksAction = PayloadAction<DecksObj>;
