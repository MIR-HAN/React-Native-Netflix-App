import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail, fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, removeDetailData } from "../actions/movieActions";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movieDetailData: null,
        pendingDetail: false,
        upcomingMovies: [],
        topRatedMovies: [],
        popularMovies: [],
        nowPlayingMovies: [],
        pending: null,
        error: null
    },

    reducers: {

        clearMovieDetail: (state) => {
            state.movieDetailData = null
          }
    },

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
            //** movie detail */
            .addCase(fetchMovieDetail.pending, (state) => {
                state.pendingDetail = true
            })

            .addCase(fetchMovieDetail.fulfilled, (state, action) => {
                state.pendingDetail = false,
                    state.movieDetailData = action.payload
            })

            .addCase(fetchMovieDetail.rejected, (state, action) => {
                state.pendingDetail = false,
                    state.error = action.payload.message
            })
      
    }
})
export const { clearMovieDetail } = movieSlice.actions
export default movieSlice.reducer;