import axios from "axios";

export const bookApi = {
    getBooksList(nameBook: string, sorting: string, category: string, step: number) {
        return axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${nameBook}${category === 'all' ? '' : `+subject:${category}`}&orderBy=${sorting}&key=AIzaSyCOeS4NYK_MvAH3x75gsOj4K6uFJ_91rwg&maxResults=${step}`)
    },
    getBook(id: string) {
        return axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    },
    getNewPortionBook(nameBook: string, sorting: string, category: string, step: number, start: number) {
        return axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${nameBook}${category === 'all' ? '' : `+subject:${category}`}&orderBy=${sorting}&key=AIzaSyCOeS4NYK_MvAH3x75gsOj4K6uFJ_91rwg&startIndex=${start}&maxResults=${step}`)
    }
}