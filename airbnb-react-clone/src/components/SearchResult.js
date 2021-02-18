import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './SearchResult.css';

function SearchResult({
  image,
  location,
  title,
  description,
  stars,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={image} alt={title} />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <strong>{stars}</strong>
          </div>
          <div className="searchResults__price">
            <h2>{price}/night</h2>
            <p>{total}/total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
