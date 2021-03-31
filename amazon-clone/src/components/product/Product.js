import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './Product.css';
import { useStateValue } from '../../context/context';

const Product = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: { id, title, image, rating, price },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((el) => (
              <StarBorderIcon className="product__ratingStar" />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
