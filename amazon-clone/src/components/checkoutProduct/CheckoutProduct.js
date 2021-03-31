import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../../context/context';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  //  console.log(basket);
  const removeItem = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__price">
          {Array(rating)
            .fill()
            .map((el) => (
              <StarBorderIcon className="checkOutProduct__ratingStar" />
            ))}
        </div>
        <button className="checkoutProduct_button" onClick={removeItem}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
