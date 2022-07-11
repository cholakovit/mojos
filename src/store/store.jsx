import { configureStore } from "@reduxjs/toolkit"
import gamesReducer from './gameSlice'
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        games: gamesReducer,
        user: userReducer
    }
})