import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import db from '../../firebase';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="tinderCards__container">
      {people.map((person) => {
        const { id, data } = person;
        return (
          <TinderCard key={id} className="swipe" preventSwipe={['up', 'down']}>
            <div
              className="card"
              style={{
                background: `url(${data.url}) no-repeat center/cover`,
              }}
            >
              <h3>{data.name}</h3>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
}

export default TinderCards;
