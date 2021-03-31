import React from 'react';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../../context/context';
import './Checkout.css';

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/46/Events/2021/Springsale/Deals/XCM_Manual_1311259_1596875_SE_se_se_gw_spring_sale_deals_se_sv_3726167_1500x80_sv_SE.jpg"
          alt=""
        />
        <div>
          <h3>Welcome, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          {basket.map((item) => {
            console.log(item);
            const { id, image, price, rating, title } = item;
            return (
              <CheckoutProduct
                image={image}
                price={price}
                title={title}
                rating={rating}
                key={id}
                price={price}
                id={id}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
