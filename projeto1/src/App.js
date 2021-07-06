import React, { Component } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import './App.css';

function App() {
  const { pathname } = window.location;
  let Component = Home;

  if (pathname === '/produtos') {
    Component = Produtos;
  }
  return (
    <section>
      <Header />
      <Component />
    </section>
  );
}

export default App;
