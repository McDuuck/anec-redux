import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      console.log(action.payload)
      const filter = action.payload
      return filter
    }
  }
})

const { filterChange } = filterSlice.actions

export const setFilter = filterChange

export default filterSlice.reducer


/*
const filterReducer = (state = '', action) =>  {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}
*/
