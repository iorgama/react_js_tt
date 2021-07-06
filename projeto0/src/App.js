import { useState } from 'react';
import './App.css';

const Compras = () => {
  const [contador, setContador] = useState(0);

  function comprar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <button onClick={comprar}>Comprar</button>
      <p>Total: {contador}</p>
      <p>Preço: R$ {contador * 250}</p>
    </div>
  );
};
const Titulo = () => {
  const numero = Math.random() * 1000;
  return <h1>Testando: {numero}</h1>;
};

const Button = () => {
  function handleClick(event) {
    console.log(event.target.innerText);
  }
  return <button onClick={handleClick}>Comprar</button>;
};

function App() {
  return (
    <div className="App">
      <Compras />
      <Titulo />
      <Button />
      <div>
        Compre aqui também.
        <Button />
      </div>
    </div>
  );
}

export default App;
