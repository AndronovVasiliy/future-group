import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookApi } from "../../API/Api";

export const getBookListAction = createAsyncThunk(
    'book/getBookList',
    async ({ nameBook, sorting, category, step }: { nameBook: string, sorting: string, category: string, step: number }, thunkAPI) => {
        try {
            const response = (await bookApi.getBooksList(nameBook, sorting, category, step))
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить книги")
        }

    }
)

export const getNewPortionBook = createAsyncThunk(
    'book/getNewPortionBook',
    async ({ nameBook, sorting, category, step, start }: { nameBook: string, sorting: string, category: string, step: number, start: number }, thunkAPI) => {
        try {
            const response = (await bookApi.getNewPortionBook(nameBook, sorting, category, step, start))
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить книги")
        }

    }
)