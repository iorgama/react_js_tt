import React from 'react';
import CardItem from './CardItem/CardItem';
import './Card.css';

const Card = ({ places }) => {
  return (
    <section className="card-section">
      {places.map(({ id, name, quantity, price, food }) => {
        return <CardItem key={id} {...{ name, quantity, price, food }} />;
      })}
    </section>
  );
};

export default Card;
