import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Search from './Search';
import { useHistory } from 'react-router-dom';

import './Banner.css';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {!showSearch ? 'Search Date' : 'Hide'}
        </Button>
        {showSearch && <Search />}
      </div>

      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button variant="outline" onClick={() => history.push('/search')}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
