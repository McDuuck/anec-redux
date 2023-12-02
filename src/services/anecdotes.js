import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const postNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const updateVote = async (anecdote) => {
    const updatedAnecdoteData = {
        ...anecdote,
        votes: anecdote.votes + 1
    };
    try {
        const response = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdoteData);
        return response.data;
    } catch (error) {
        console.error('Error updating anecdote:', error);
    }
};
  
  
  

export default { getAll, postNew, updateVote }