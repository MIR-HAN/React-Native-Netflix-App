import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteMovies: [],

  },
  reducers: {

    toggleFavorites: (state, action) => {

      const movie = action.payload
      const exist = state.favoriteMovies.find((m) => m.id === movie.id)

      if (exist) {
        state.favoriteMovies = state.favoriteMovies.filter((m) => m.id !== movie.id)
      } else {
        state.favoriteMovies.push(movie)
      }

    },




  },


});

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
