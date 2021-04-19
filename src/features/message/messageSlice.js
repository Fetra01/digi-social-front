import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAll } from './mesageAPI';

const initialState = {
    value: [],
};

export const fetchAsync = createAsyncThunk(
    "message/fetchAll",
    async (amount) => {
        return fetchAll(amount);
    }
);

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsync.fulfilled, (state, action) => {
                state.value = action.payload;
            });
    },
});

export const selectMessage = (state) => state.messages.value;

export default messageSlice.reducer;