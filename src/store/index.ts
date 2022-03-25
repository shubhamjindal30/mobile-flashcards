import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { watcherSaga } from './rootSaga';
import deckReducer from './decks/slice';

const rootReducer = combineReducers({
  deck: deckReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(...middlewares)
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
