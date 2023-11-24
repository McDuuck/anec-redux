import { useDispatch } from 'react-redux';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const create = (event) => {
    event.preventDefault();
    const content = event.target.newpost.value;
    event.target.newpost.value = '';
    dispatch({ type: 'CREATE', content: content});
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name="newpost"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;