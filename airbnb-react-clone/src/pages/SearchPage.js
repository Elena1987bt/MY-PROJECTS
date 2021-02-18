import React from 'react';
import Button from '@material-ui/core/Button';
import SearchResult from '../components/SearchResult';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays • 26 september to 30 september • 2 guests</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancelling Flexibility</Button>
        <Button variant="outlined">Type Of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        image="https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Unique stays"
        description="Unique activities we cen do together, led by a world of host.Enjoy in your holiday."
        price="$789"
        location="In the center of London"
        total="$887"
        stars="4.5"
      />
      <SearchResult
        image="https://images.pexels.com/photos/65225/boat-house-cottage-waters-lake-65225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Cabins and Cottages"
        description="Comfortable places for you and your friends. Enjoy in your holiday."
        price="$779"
        location="In beautiful Sweden"
        total="$8187"
        stars="4.1"
      />
      <SearchResult
        image="https://images.pexels.com/photos/6001554/pexels-photo-6001554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Pets welcome"
        description="Exellent choice for your pets. Enjoy in your holiday."
        price="$458"
        location="In this beautiful villige"
        total="$847"
        stars="3.1"
      />
      <SearchResult
        image="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Unique stays"
        description="Unique activities we cen do together, led by a world of host.Enjoy in your holiday."
        price="$758"
        location="In Miami, USA"
        total="$2047"
        stars="3.1"
      />
      <SearchResult
        image="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Online Experiences"
        description="Spaces that are more than just a place to sleep. Enjoy in your holiday."
        price="$234"
        location="Feel like a home"
        total="$8047"
        stars="4.7"
      />
      <SearchResult
        image="https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Adventures"
        description="Adventures are onthe way...Enjoy in your holiday."
        price="$778"
        location="In this beautiful villige"
        total="$1847"
        stars="4.6"
      />
    </div>
  );
}

export default SearchPage;
