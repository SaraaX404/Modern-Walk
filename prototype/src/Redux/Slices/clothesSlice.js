import * as Api from '../api'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


 export const getClothes = createAsyncThunk(
    "clothes/getClothes",
    async ({category, limit}, { rejectWithValue }) => {
        try {
            const response = await Api.getProducts(category, limit);
            console.log(response)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const clothesSlice = createSlice({
    name: "clothes",
    initialState: {
       clothes:[], loading:false, error: null
    },
    reducers:{

    },

    extraReducers: {
        [getClothes.pending]: (state, action) => {
            state.loading = true;

        },
        [getClothes.fulfilled]: (state, action) => {

            console.log(action.payload)
            state.clothes = action.payload
        },
        [getClothes.rejected]: (state, action) => {
            state.error = action.payload.message;
        },

    },
});

export default clothesSlice.reducer;
