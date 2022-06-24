import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookType, ResponseBookType } from '../../commonTypes/commonTypes';
import { getBookListAction, getNewPortionBook } from './booksActionCreator';

export interface InitialStateType {
  querySearch: string,
  books: BookType[],
  isLoading: boolean,
  error: string,
  totalItems: number,
  portion: number,
  step: number,
  category: string,
  sorting: string,
  visible: boolean,
}

const initialState: InitialStateType = {
  querySearch: "",
  books: [],
  isLoading: false,
  error: "",
  totalItems: 0,
  portion: 1,
  step: 30,
  category: "",
  sorting: "relevance",
  visible: false,
};

export const bookSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSearchData(state, action: PayloadAction<{ querySearch: string, category: string, sorting: string }>) {
      state.querySearch = action.payload.querySearch
      state.sorting = action.payload.sorting
      state.category = action.payload.category
    },
  },
  extraReducers: {
    [getBookListAction.fulfilled.type]: (state, action: PayloadAction<ResponseBookType>) => {
      state.books = action.payload.items
      state.totalItems = action.payload.totalItems
      state.portion = 2
      state.isLoading = false
    },
    [getBookListAction.pending.type]: (state) => {
      state.isLoading = true
    },
    [getBookListAction.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    [getNewPortionBook.fulfilled.type]: (state, action: PayloadAction<ResponseBookType>) => {
      state.books = [...state.books, ...action.payload.items]
      state.portion = state.portion + 1
      state.isLoading = false
    },
    [getNewPortionBook.pending.type]: (state) => {
      state.isLoading = true
    },
    [getNewPortionBook.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  },
});
