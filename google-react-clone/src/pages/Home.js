import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar alt="Elena A" src="" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwd36WakPm043kyPHZRzbO2way9Xvs2WCvJA&usqp=CAU"
          alt="logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
