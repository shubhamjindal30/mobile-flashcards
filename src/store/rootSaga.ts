import { all, fork } from 'redux-saga/effects';

import { watchDeckRequests } from './decks/saga';

export function* watcherSaga() {
  yield all([fork(watchDeckRequests)]);
}
