import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    user: null,
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    userMessage: '',
    error: null,
}

export const selectUser = createAsyncThunk('user/user', async () => {
    const user = await axios.get(import.meta.env.VITE_MOJO_USER)
    //console.log('selectUser', user)
    return user.data.data
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(selectUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.status = 'succeeded'
        })
    }
})

export const getUser = (state) => state.user.user

export default userSlice.reducer