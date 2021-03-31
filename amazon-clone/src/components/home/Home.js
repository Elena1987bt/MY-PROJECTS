import React from 'react';
import Product from '../product/Product';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="12335566"
            key="12335566"
            title="The Amazon Basics Wireless Mouse provides a sleek, gently curved shape for enhanced
          comfort."
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price="19.99"
            rating={5}
          />
          <Product
            id="12335555466"
            key="12335555466"
            title="Amazon Basics Blue, White, and Yellow Microfiber Cleaning Cloth - Pack of 24"
            image="https://m.media-amazon.com/images/I/81wUWVAiWDL._AC_UL320_.jpg"
            price="10.85"
            rating={2}
          />
          <Product
            id="1233654545566"
            key="1233654545566"
            title="Amazon Basics Electric Glass and Steel Kettle - 1.0 Liter"
            image="https://m.media-amazon.com/images/I/61JS5e82ayL._AC_UL320_.jpg"
            price="15.99"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12337456266"
            key="12337456266"
            image="https://m.media-amazon.com/images/I/61Rlhxpau-L._AC_UL320_.jpg"
            title="5 Pack 6ft Lightning Charging Cables, MFi Certified iPhone Charger USB Data Cord High"
            price="11.99"
            rating={4}
          />
          <Product
            id="12337785566"
            key="12337785566"
            title="400-Thread-Count Queen Size Sheet Set - 6 Pcs with 4 Pillowcases - 100% Cotton"
            image="https://m.media-amazon.com/images/I/716sHF6KaBL._AC_UL320_.jpg"
            price="155.99"
            rating={5}
          />
          <Product
            id="12335555566"
            key="12335555566"
            title="Gorilla Grip Original Premium Luxury Bath Rug, 24x17 Inch, Incredibly Soft, Thick, Absorbent"
            image="https://m.media-amazon.com/images/I/814FrGeudZL._AC_UL320_.jpg"
            price="222.99"
            rating={5}
          />
          <Product
            id="1233578895566"
            key="1233578895566"
            title="UB size 50” Phone Tripod Stand, Aluminum Lightweight Tripod for Camera and Phone,"
            image="https://m.media-amazon.com/images/I/71R56T5-s-L._AC_UL320_.jpg"
            price="188.99"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12335566454"
            key="12335566454"
            image="https://m.media-amazon.com/images/I/61pY-k05ZpL._AC_UL320_.jpg"
            title="Amazon Basics Hard Shell Carry On Spinner Suitcase Luggage - 22 Inch, Slate Grey"
            price="18.99"
            rating={3}
          />
          <Product
            id="9912335566"
            key="9912335566"
            image="https://m.media-amazon.com/images/I/41BS3eLBuPL._AC_UY218_.jpg"
            title="Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition"
            price="188.99"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
