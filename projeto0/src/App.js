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
const Titulo = ({ children }) => {
  const numero = Math.random() * 1000;
  return (
    <h1>
      Testando: {numero}, {children}
    </h1>
  );
};

const Button = ({ label }) => {
  function handleClick(event) {
    console.log(event.target.innerText);
  }
  return <button onClick={handleClick}>{label}</button>;
};

function App() {
  return (
    <div className="App">
      <Compras />
      <Titulo> Isso é o children</Titulo>
      <Button label="Comprar Teste" />
      <div>
        Compre aqui também.
        <Button label="Comprar" />
      </div>
    </div>
  );
}

export default App;
