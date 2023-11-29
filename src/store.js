import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'
import { notificationReducer } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes.js'


const store =  configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterSlice,
        notification: notificationReducer
    }
})

anecdoteService.getAll().then(anecdotes =>
    store.dispatch(setAnecdotes(anecdotes))
)

export default store