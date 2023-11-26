import { setFilter } from "../reducers/filterReducer"
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const filterValue = event.target.value
    dispatch(setFilter(filterValue))
    console.log(setFilter(filterValue))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input id="filter_div" onChange={handleChange} />
    </div>
  )
}

export default Filter