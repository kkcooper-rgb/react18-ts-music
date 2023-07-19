import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import counterReducer from './modules/counter';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type IAppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => IAppDispatch = useDispatch;

export default store;
