import AsyncStorage from '@react-native-async-storage/async-storage';

import { Deck, DecksObj, SaveQuestionPayload } from './types';

const getDecksFromStorage = async () => {
  try {
    const decksString = await AsyncStorage.getItem('decks');
    const decks: DecksObj = decksString ? JSON.parse(decksString) : {};
    return { data: decks };
  } catch (error) {
    console.log(`Error in getDecksFromStorage`);
    return { data: {} };
  }
};

const saveDeckInStorage = async (title: string) => {
  try {
    const decksString = await AsyncStorage.getItem('decks');
    const decks: DecksObj = decksString ? JSON.parse(decksString) : {};
    const newDeck: Deck = {
      id: `${Date.now()}`,
      title,
      questions: []
    };
    decks[newDeck.id] = newDeck;
    await AsyncStorage.setItem('decks', JSON.stringify(decks));
    return { data: newDeck };
  } catch (error) {
    console.log(`Error in saveDeckInStorage`);
    return { data: null };
  }
};

const saveQuestionInStorage = async (payload: SaveQuestionPayload) => {
  try {
    const decksString = await AsyncStorage.getItem('decks');
    const decks: DecksObj = decksString ? JSON.parse(decksString) : {};
    const deck = decks[payload.deckId];
    if (deck) {
      deck.questions.push(payload.question);
      decks[deck.id] = deck;
      await AsyncStorage.setItem('decks', JSON.stringify(decks));
      return true;
    } else return false;
  } catch (error) {
    console.log(`Error in saveQuestionInStorage`);
    return false;
  }
};

const deleteDeckFromStorage = async (deckId: string) => {
  try {
    const decksString = await AsyncStorage.getItem('decks');
    const decks: DecksObj = decksString ? JSON.parse(decksString) : {};
    const deck = decks[deckId];
    if (deck) {
      delete decks[deck.id];
      await AsyncStorage.setItem('decks', JSON.stringify(decks));
      return true;
    } else return false;
  } catch (error) {
    console.log(`Error in deleteDeckFromStorage`);
    return false;
  }
};

export { getDecksFromStorage, saveDeckInStorage, saveQuestionInStorage, deleteDeckFromStorage };
