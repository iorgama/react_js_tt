import React, { useState } from 'react';
import Button from './Button';
import Produto from './Produto';

function App() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = React.useState(null);
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  async function handleClick({ target }) {
    setProduto(target.innerText);
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <Button label="Smartphone" method={handleClick} />
      <Button label="Tablet" method={handleClick} />
      <Button label="Notebook" method={handleClick} />
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
