import AsyncStorage from '@react-native-async-storage/async-storage';

import { DecksObj } from './types';

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

export { getDecksFromStorage };
