import React from 'react';
import Card from './Card';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <Card
        src="https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Entire Homes"
        description="Spaces that are more than just a place to sleep. Enjoy in your holiday."
      />
      <Card
        src="https://images.pexels.com/photos/65225/boat-house-cottage-waters-lake-65225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Cabins and Cottages"
        description="Comfortable places for you and your friends. Enjoy in your holiday."
      />
      <Card
        src="https://images.pexels.com/photos/6001554/pexels-photo-6001554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Pets welcome"
        description="Exellent choice for your pets. Enjoy in your holiday."
      />
      <Card
        src="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Unique stays"
        description="Unique activities we cen do together, led by a world of host.Enjoy in your holiday."
        price="$789"
      />
      <Card
        src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Online Experiences"
        description="Spaces that are more than just a place to sleep. Enjoy in your holiday."
        price="$234"
      />
      <Card
        src="https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Adventures"
        description="Adventures are onthe way...Enjoy in your holiday."
        price="$567"
      />
    </div>
  );
}

export default Cards;
