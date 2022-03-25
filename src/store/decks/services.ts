import AsyncStorage from '@react-native-async-storage/async-storage';

import { Deck, DecksObj } from './types';

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

export { getDecksFromStorage, saveDeckInStorage };
