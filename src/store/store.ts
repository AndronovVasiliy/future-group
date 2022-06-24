import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { bookSlice } from './reducers/bookSlice';

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
