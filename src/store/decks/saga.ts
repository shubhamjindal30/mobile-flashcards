import { all, call, put, takeLatest } from 'redux-saga/effects';

import { DecksObj } from './types';
import { getDecks, setDecks } from './slice';
import { getDecksFromStorage } from './services';

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

export function* watchDeckRequests() {
  yield all([takeLatest(getDecks.type, handleGetDecks)]);
}
