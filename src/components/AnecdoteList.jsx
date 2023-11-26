import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (!state.anecdotes) {
      return [];
    }
    if (state.filter === '') {
      return state.anecdotes;
    }
    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()));  });
  

  if (anecdotes) {
    anecdotes.sort((a, b) => b.votes - a.votes);
  }

  const vote = (id) => {
    dispatch({ type: 'VOTE', id: id })
  }

  return (
    <div>
      {anecdotes ? anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
          <br />
        </div>
      ) : 'Loading...'}
    </div>
  );
};

export default AnecdoteList