import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
  },
});

export const { setBooks, addBook, removeBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
