import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { Deck, DecksObj, DeleteDeckAction, SaveDeckAction, SaveQuestionAction } from './types';
import {
  deleteDeck,
  deleteDeckFromStore,
  getDecks,
  saveDeck,
  saveQuestion,
  setDeck,
  setDecks,
  setQuestion,
  deleteAllDecks,
  deleteAllDecksFromStore
} from './slice';
import {
  deleteDeckFromStorage,
  getDecksFromStorage,
  saveDeckInStorage,
  saveQuestionInStorage,
  deleteAllDecksFromStorage
} from './services';

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

function* handleSaveQuestion(action: SaveQuestionAction) {
  try {
    const response: boolean = yield call(saveQuestionInStorage, action.payload);
    if (response) {
      yield put(setQuestion(action.payload));
    }
  } catch (error) {
    console.log(`Error in handleSaveQuestion: ${error}`);
    Alert.alert('Error', 'There was an error in saving card!');
  }
}

function* handleDeleteDeck(action: DeleteDeckAction) {
  try {
    const response: boolean = yield call(deleteDeckFromStorage, action.payload);
    if (response) {
      yield put(deleteDeckFromStore(action.payload));
    }
  } catch (error) {
    console.log(`Error in handleDeleteDeck: ${error}`);
    Alert.alert('Error', 'There was an error in deleting deck!');
  }
}

function* handleDeleteAllDecks() {
  try {
    const response: boolean = yield call(deleteAllDecksFromStorage);
    if (response) {
      yield put(deleteAllDecksFromStore());
    }
  } catch (error) {
    console.log(`Error in handleDeleteAllDecks: ${error}`);
    Alert.alert('Error', 'There was an error in deleting deck!');
  }
}

export function* watchDeckRequests() {
  yield all([
    takeLatest(getDecks.type, handleGetDecks),
    takeLatest(saveDeck.type, handleSaveDeck),
    takeLatest(saveQuestion.type, handleSaveQuestion),
    takeLatest(deleteDeck.type, handleDeleteDeck),
    takeLatest(deleteAllDecks.type, handleDeleteAllDecks)
  ]);
}
