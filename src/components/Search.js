import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import { actionTypes } from '../context/reducer'

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue()

  const [input, setInput] = useState('')
  const history = useHistory()
  const search = (e) => {
    e.preventDefault()
    history.push('./search')

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
  }
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined"> I m Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            className="search-buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}>
            Google Search
          </Button>
          <Button className="search-buttonsHidden" variant="outlined">
            I m Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  )
}

export default Search
