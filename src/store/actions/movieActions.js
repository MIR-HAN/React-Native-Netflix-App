import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { BASE_URL, NOW_PLAYING_URL, POPULAR_URL, TOP_RATED_URL, UPCOMING_URL } from "../../service/urls";


const fetchUpcomingMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await getRequest(UPCOMING_URL);
    return response.data;

})

const fetchPopularMovies = createAsyncThunk("movies/fetchPopularMovies", async () => {
    const response = await getRequest(POPULAR_URL);
    return response.data;

})

const fetchTopRatedMovies = createAsyncThunk("movies/fetchTopRatedMovies", async () => {
    const response = await getRequest(TOP_RATED_URL);
    return response.data;

})

const fetchNowPlayingMovies = createAsyncThunk("movies/fetchNowPlaying", async () => {
    const response = await getRequest(NOW_PLAYING_URL);
    return response.data;

})

const fetchMovieDetail = createAsyncThunk("movies/fetchMovieDetail", async (movie_id) => {
    const response = await getRequest(BASE_URL + "movie/" + movie_id)
    return response.data
})



export { fetchUpcomingMovies, fetchMovieDetail, fetchNowPlayingMovies, fetchTopRatedMovies, fetchPopularMovies }