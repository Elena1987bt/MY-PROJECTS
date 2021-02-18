import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <Cards />
    </div>
  );
}

export default Home;
