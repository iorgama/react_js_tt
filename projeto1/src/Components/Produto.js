import React from 'react';

const Produto = ({ name, properties }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <p>{name}</p>
      <ul>
        {properties.map((property, index) => (
          <li key={index}> {property}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
