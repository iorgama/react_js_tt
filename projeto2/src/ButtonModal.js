import React from 'react';

const ButtonModal = ({ setModal }) => (
  <button onClick={() => setModal((modal) => !modal)}>Abrir</button>
);

export default ButtonModal;
