import React from 'react';
import './Button.css';

const Button = ({ title, classButton }) => {
  return <button className={classButton}>{title}</button>;
};

export default Button;
