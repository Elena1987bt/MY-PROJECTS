import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';

import { Link, useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import './Header.css';

function Header() {
  const [input, setInput] = useState('');
  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    history.push('/search');
    setInput('');
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
          className="header__icon"
          alt="logo-image"
        />
      </Link>
      <form className="header___center">
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </form>
      <div className="header__right">
        <p> Become a host</p>
        <LanguageIcon />
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="header__avatar"
        />
      </div>
    </div>
  );
}

export default Header;
