import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, setNotification, updateAnecdote } from '../reducers/anecdoteReducer'

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

  const handleVoteAnecdote = (id) => {
    const anecdote = anecdotes.find(a => a.id === id);
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification({ message: `you voted '${anecdote.content}'`, timeout: 2 }))
    dispatch(updateAnecdote({...anecdote, votes: anecdote.votes + 1}))
  };

  return (
    <div>
      {sortedAnecdotes ? sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVoteAnecdote(anecdote.id)}>vote</button>
          </div>
          <br />
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default AnecdoteList