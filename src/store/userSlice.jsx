import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    user: null,
    status: import.meta.env.VITE_IDLE, //'idle' | 'loading' | 'succeeded' | 'failed'
    userMessage: '',
    error: null,
}

export const selectUser = createAsyncThunk('user/user', async () => {
    const user = await axios.get(import.meta.env.VITE_MOJO_USER)
    return user.data.data
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(selectUser.pending, (state, action) => {
                state.status = import.meta.env.VITE_LOADING
            })
            .addCase(selectUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.status = import.meta.env.VITE_SUCCESS
            })
            .addCase(selectUser.rejected, (state, action) => {
                state.status = import.meta.env.VITE_FAILED
                state.error = action.error.message
            })
    }
})

export const getUser = (state) => state.user.user
export const getUserError = (state) => state.user.error
export const getUserStatus = (state) => state.user.status

export default userSlice.reducer