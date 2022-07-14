import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    games: [],
    slotGames: [],
    lineFilterParam: null,
    filtered: [],
    filteredMsg: null,
    gameFeature: [],
    status: import.meta.env.VITE_IDLE, //'idle' | 'loading' | 'succeeded' | 'failed'
    allGamesStatus: import.meta.env.VITE_IDLE, //'idle' | 'loading' | 'succeeded' | 'failed'
    allGamesError: null,
    slotGamesError: null
}

export const selectGames = createAsyncThunk('games/games', async () => {
    const games = await axios.get(import.meta.env.VITE_MOJO_GAMES)
    return games.data
})

const checkGameFeature = (state, game) => {
    if(state.gameFeature.length > 0) { // if clicked any game feature
        state.gameFeature.map(gameFeature => { // cycle through the picked game features

            //find the picked game feature in the game features array
            const isTrue = game.slotData.tags.some(tag => tag == gameFeature) 
            //const isTrue2 = state.filtered.some(filteredGame => filteredGame.name == game.name)

            if(isTrue == true) { // if you find the picked game feature in the game array of featuress, PUSH
                state.filtered.push(game)
            }
        })
    } else if(state.gameFeature.length == 0) {
        state.filtered.push(game)
    }
}

const filter = (state) => {

    state.filtered.length = 0
    state.filteredMsg = null

    switch(state.lineFilterParam) {
        case null:
            state.games.filter(game => {
                state.gameFeature.map(gameFeature => {
                    const isTrue = game.slotData.tags.some(tag => tag == gameFeature)
                    if(isTrue == true) {
                        state.filtered.push(game)
                    }
                })
            })
        break;
        case '1':
            state.filtered.length = 0 // array empty
            state.games.filter(game => { // cycle through slot games
                if(game?.slotData?.linesCount > 4 && game?.slotData?.linesCount < 10) { // check linesCount > 4 && < 10
                    checkGameFeature(state, game)
                }
            })
        break;
        case '2':
            state.filtered.length = 0 // array empty
            state.games.filter(game => { // cycle through slot games
                if(game?.slotData?.linesCount > 9 && game?.slotData?.linesCount < 30) { // check linesCount > 4 && < 10
                    checkGameFeature(state, game)
                }
            })
        break;
        case '3':
            state.filtered.length = 0 // array empty
            state.games.filter(game => { // cycle through slot games
                if(game?.slotData?.linesCount > 29 && game?.slotData?.linesCount < 50) { // check linesCount > 4 && < 10
                    checkGameFeature(state, game)
                }
            })
        break;
        case '4':
            state.filtered.length = 0 // array empty
            state.games.filter(game => { // cycle through slot games
                if(game?.slotData?.linesCount > 50) { // check linesCount > 4 && < 10
                    checkGameFeature(state, game)
                }
            })
        break;
    }
}

const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        filterByLines(state, action) {
            state.lineFilterParam = action.payload
            filter(state)
        },
        filteredByGameFeatures(state, action) {
    
            const gameFeatureIndexTrue = state.gameFeature.some(element => element == action.payload)

            if(gameFeatureIndexTrue == false) {
                state.gameFeature.push(action.payload)
            } else {
                let index = state.gameFeature.indexOf(action.payload)
                if(index !== -1) {
                    state.gameFeature.splice(index, 1)
                }
            }
            filter(state)

            if(state.filtered.length == 0) {
                state.filteredMsg = 'Games not found'
            }
        },
    },
    extraReducers(builder) {
        builder
        .addCase(selectGames.pending, (state, action) => {
            state.allGamesStatus = import.meta.env.VITE_LOADING
        })
        .addCase(selectGames.fulfilled, (state, action) => {
            state.games = action.payload
            state.allGamesStatus = import.meta.env.VITE_SUCCESS
        })
        .addCase(selectGames.rejected, (state, action) => {
            state.allGamesStatus = import.meta.env.VITE_FAILED
            state.allGamesError = action.error.message
        })
    }
})

export const getAllGameStatus = (state) => state.games.allGamesStatus
export const getGames = (state) => state.games.games
export const getGamesError = (state) => state.games.allGamesError
export const getFilteredGames = (state) => state.games.filtered
export const getFilteredGamesMsg = (state) => state.games.filteredMsg

export const { filterByLines, filteredByGameFeatures } = gameSlice.actions

export default gameSlice.reducer