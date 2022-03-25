import {
  TypedUseSelectorHook,
  useDispatch as reduxDispatch,
  useSelector as reduxSelector
} from 'react-redux';

import type { RootState, AppDispatch } from './';

export const useDispatch = () => reduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;
