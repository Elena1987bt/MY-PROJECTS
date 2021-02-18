import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';
import './Search.css';

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push('/search');
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      <div className="search__buttons">
        {!hideButtons ? (
          <div>
            <Button variant="outlined" onClick={search} type="submit">
              Google Search
            </Button>
            <Button variant="outlined"> I'm Feeling Lucky </Button>
          </div>
        ) : (
          <div className="search__hideButtons">
            <Button variant="outlined" onClick={search} type="submit">
              Google Search
            </Button>
            <Button variant="outlined"> I'm Feeling Lucky </Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default Search;
