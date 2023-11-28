import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (!state.anecdotes) {
      return []
    }
    if (state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())) 
  })

  let sortedAnecdotes = anecdotes
  if (anecdotes) {
    sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
  }

  const voteAnecdote = (id) => {
    dispatch(vote(id))
    const anecdote = anecdotes.find(a => a.id === id)
    dispatch(setNotification(`You voted '${anecdote.content}'`))
  }

  return (
    <div>
      {sortedAnecdotes ? sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
          </div>
          <br />
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default AnecdoteList