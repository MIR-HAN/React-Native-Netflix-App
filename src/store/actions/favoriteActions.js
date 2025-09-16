import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCOUNT_URL, BASE_URL, FAVORITES_URL } from "../../service/urls";
import { postRequest } from "../../service/verbs";
import { ACCOUNT_ID } from "../../utils/constants";


const addFavoriteMovie = createAsyncThunk("favorites/addFavoriteMovie", async (values) => {
    const url = BASE_URL + ACCOUNT_URL + ACCOUNT_ID + FAVORITES_URL
    const response = await postRequest(url,values);
    return response.data;

})


export{addFavoriteMovie}