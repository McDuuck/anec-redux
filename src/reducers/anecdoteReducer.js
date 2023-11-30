import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(n => n.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes++
      }
    },
    appendAnecdotes(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

const notificationInitialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificationInitialState,
  reducers: {
    setNotification: (state, action) => action.payload,
    clearNotification: () => notificationInitialState,
  },
})

export const { vote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions
export const { setNotification, clearNotification } = notificationSlice.actions
export const notificationReducer = notificationSlice.reducer


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.postNew(content)
    dispatch(appendAnecdotes(newAnecdote))
  }
}


export default anecdoteSlice.reducer
