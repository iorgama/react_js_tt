import React from 'react';
import Button from '../../Button/Button';
import './CardItem.css';

const CardItem = ({ name, quantity, price, food }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://picsum.photos/400/400" alt="Foto do lugar" />
      </div>
      <div className="container">
        <h3>
          <strong>{name}</strong>
        </h3>
        <p>Casa: {quantity}</p>
        <p>Custo para entrar: {price}</p>
        <p>Comida: {food}</p>
        <Button classButton="card-button" title="Saiba mais" />
      </div>
    </div>
  );
};

export default CardItem;
