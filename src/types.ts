/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  DeckListScreen: undefined;
  DeckScreen: { deckId?: string } | undefined;
  QuizScreen: { deckId?: string } | undefined;
  NewDeckScreen: undefined;
  NewCardScreen: { deckId?: string } | undefined;
  NotFoundScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
