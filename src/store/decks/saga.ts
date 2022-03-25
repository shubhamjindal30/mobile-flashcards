import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Deck, DecksObj, SaveDeckAction } from './types';
import { getDecks, saveDeck, setDeck, setDecks } from './slice';
import { getDecksFromStorage, saveDeckInStorage } from './services';
import { Alert } from 'react-native';

function* handleGetDecks() {
  try {
    const response: { data: DecksObj } = yield call(getDecksFromStorage);
    const { data } = response;
    yield put(setDecks(data));
  } catch (error) {
    console.log(`Error in handleGetDecks: ${error}`);
    yield put(setDecks({}));
  }
}

function* handleSaveDeck(action: SaveDeckAction) {
  try {
    const response: { data: Deck | null } = yield call(saveDeckInStorage, action.payload);
    if (response.data) {
      yield put(setDeck(response.data));
    }
  } catch (error) {
    console.log(`Error in handleSaveDeck: ${error}`);
    Alert.alert('Error', 'There was an error in saving customer!');
  }
}

export function* watchDeckRequests() {
  yield all([takeLatest(getDecks.type, handleGetDecks), takeLatest(saveDeck.type, handleSaveDeck)]);
}
