import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    games: [],
    slotGames: [],
    lineFilterParam: null,
    filtered: [],
    gameFeature: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    allGamesStatus: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
}

export const selectGames = createAsyncThunk('games/games', async () => {
    const games = await axios.get(import.meta.env.VITE_MOJO_GAMES)
    return games.data
})

export const selectSlotGames = createAsyncThunk('games/slotGames', async () => {
    const slotGames = await axios.get(import.meta.env.VITE_MOJO_SLOT_GAMES)
    return slotGames.data
})

const filter = (state) => {

    state.filtered.length = 0

    switch(state.lineFilterParam) {
        case null:
            console.log('case line null', state.lineFilterParam)
            state.slotGames.filter(slotGame => {
                state.gameFeature.map(gameFeature => {
                    const isTrue = slotGame.slotData.tags.some(tag => tag == gameFeature)
                    if(isTrue == true) {
                        state.filtered.push(slotGame)
                    }
                })
            })

        break;
        case '1':
            state.filtered.length = 0 // array empty

            state.slotGames.filter(slotGame => { // cycle through slot games

                if(slotGame.slotData.linesCount > 4 && slotGame.slotData.linesCount < 10) { // check linesCount > 4 && < 10
                    if(state.gameFeature.length > 0) { // if clicked any game feature
                        state.gameFeature.map(gameFeature => { // cycle through the picked game features

                            //find the picked game feature in the game features array
                            const isTrue = slotGame.slotData.tags.some(tag => tag == gameFeature) 

                            if(isTrue == true) { // if you find the picked game feature in the game array of featuress, PUSH
                                state.filtered.push(slotGame)
                            }
                        })
                    } else if(state.gameFeature.length == 0) {
                        state.filtered.push(slotGame)
                    }
                }
            })


        break;

        case '2':
            state.filtered.length = 0 // array empty
            state.slotGames.filter(slotGame => { // cycle through slot games
                if(slotGame.slotData.linesCount > 9 && slotGame.slotData.linesCount < 30) { // check linesCount > 4 && < 10
                    if(state.gameFeature.length > 0) { // if clicked any game feature
                        state.gameFeature.map(gameFeature => { // cycle through the picked game features

                            //find the picked game feature in the game features array
                            const isTrue = slotGame.slotData.tags.some(tag => tag == gameFeature) 

                            if(isTrue == true) { // if you find the picked game feature in the game array of featuress, PUSH
                                state.filtered.push(slotGame)
                            }
                        })
                    } else if(state.gameFeature.length == 0) {
                        state.filtered.push(slotGame)
                    }
                }
            })
        break;
        case '3':
            state.filtered.length = 0 // array empty
            state.slotGames.filter(slotGame => { // cycle through slot games
                if(slotGame.slotData.linesCount > 29 && slotGame.slotData.linesCount < 50) { // check linesCount > 4 && < 10
                    if(state.gameFeature.length > 0) { // if clicked any game feature
                        state.gameFeature.map(gameFeature => { // cycle through the picked game features

                            //find the picked game feature in the game features array
                            const isTrue = slotGame.slotData.tags.some(tag => tag == gameFeature) 

                            if(isTrue == true) { // if you find the picked game feature in the game array of featuress, PUSH
                                state.filtered.push(slotGame)
                            }
                        })
                    } else if(state.gameFeature.length == 0) {
                        state.filtered.push(slotGame)
                    }
                }
            })
        break;
        case '4':
            state.filtered.length = 0 // array empty
            state.slotGames.filter(slotGame => { // cycle through slot games
                if(slotGame.slotData.linesCount > 50) { // check linesCount > 4 && < 10
                    if(state.gameFeature.length > 0) { // if clicked any game feature
                        state.gameFeature.map(gameFeature => { // cycle through the picked game features

                            //find the picked game feature in the game features array
                            const isTrue = slotGame.slotData.tags.some(tag => tag == gameFeature) 

                            if(isTrue == true) { // if you find the picked game feature in the game array of featuress, PUSH
                                state.filtered.push(slotGame)
                            }
                        })
                    } else if(state.gameFeature.length == 0) {
                        state.filtered.push(slotGame)
                    }
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
        },
    },
    extraReducers(builder) {
        builder.addCase(selectGames.fulfilled, (state, action) => {
            state.games = action.payload
            state.allGamesStatus = 'succeeded'
        })
        builder.addCase(selectSlotGames.fulfilled, (state, action) => {
            state.slotGames = action.payload
            state.status = 'succeeded'
        })
    }
})

export const getGameStatus = (state) => state.games.status
export const getAllGameStatus = (state) => state.games.allGamesStatus
export const getGames = (state) => state.games.games
export const getSlotGames = (state) => state.games.slotGames
export const getFilteredGames = (state) => state.games.filtered

export const { filterByLines, filteredByGameFeatures } = gameSlice.actions

export default gameSlice.reducer