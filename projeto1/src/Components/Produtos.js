import React from 'react';
import Title from './Titulo';
import Produto from './Produto';

const produtos = [
  { id: 1, name: 'Notebook', properties: ['16gb ram', '512gb'] },
  { id: 2, name: 'Smartphone', properties: ['2gb ram', '128gb'] },
  { id: 3, name: 'Smartphone 2', properties: ['6gb ram', '256gb'] },
];

const Produtos = () => {
  return (
    <section>
      <Title title="Produtos" />
      {produtos.map(({ id, name, properties }) => (
        <Produto key={id} name={name} properties={properties} />
      ))}
      ;
    </section>
  );
};

export default Produtos;
