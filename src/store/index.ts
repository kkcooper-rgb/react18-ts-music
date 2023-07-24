import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook, shallowEqual } from 'react-redux';
import counterReducer from './modules/counter';
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
  },
});
type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type IAppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => IAppDispatch = useDispatch;
export const shallowEqualApp = shallowEqual;
export default store;
