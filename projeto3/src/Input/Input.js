import React from 'react';
import Button from '../Button/Button';
import './Input.css';

function Input(props) {
  return (
    <section className="input-section">
      <form className="input-form">
        <input
          type="email"
          id="email"
          placeholder="Insira o email para ficar por dentro das novidades"
          name="email"
        />
        <Button classButton={'input-button'} title="Inscreva-se" />
      </form>
    </section>
  );
}

export default Input;
