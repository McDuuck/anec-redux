import { configureStore } from '@reduxjs/toolkit'
import anecdoteSlice from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'
import { notificationReducer } from './reducers/anecdoteReducer'

const store =  configureStore({
    reducer: {
        anecdotes: anecdoteSlice,
        filter: filterSlice,
        notification: notificationReducer
    }
})

export default store