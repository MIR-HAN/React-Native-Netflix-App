import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchNowPlaying, fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcoming, fetchUpcomingMovies } from "../actions/movieActions";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        upcomingMovies: [],
        topRatedMovies: [],
        popularMovies: [],
        nowPlayingMovies: [],
        pending: null,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(fetchUpcomingMovies.pending, (state) => {
                state.pending = true
            })

            .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
                state.pending = false,
                    state.upcomingMovies = action.payload.results
            })

            .addCase(fetchUpcomingMovies.rejected, (state, action) => {
                state.pending = false,
                    state.error = action.payload.message
            })

            ///*top rated movies*/

            .addCase(fetchTopRatedMovies.pending, (state) => {
                state.pending = true
            })

            .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
                state.pending = false,
                    state.topRatedMovies = action.payload.results
            })

            .addCase(fetchTopRatedMovies.rejected, (state, action) => {
                state.pending = false,
                    state.error = action.payload.message
            })

            //**popular movies */
            .addCase(fetchPopularMovies.pending, (state) => {
                state.pending = true
            })

            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.pending = false,
                    state.popularMovies = action.payload.results
            })

            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.pending = false,
                    state.error = action.payload.message
            })
            //**now playing movies */
            .addCase(fetchNowPlayingMovies.pending, (state) => {
                state.pending = true
            })

            .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
                state.pending = false,
                    state.nowPlayingMovies = action.payload.results
            })

            .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
                state.pending = false,
                    state.error = action.payload.message
            })


    }
})

export default movieSlice.reducer;