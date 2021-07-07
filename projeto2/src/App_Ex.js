import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: 'Iorgama', idade: '40' });
  const [modal, setModal] = React.useState(false);
  const [contar, setContar] = React.useState(1);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui faculdade' });
    setContar((contar) => {
      return contar + 1;
    });
  }
  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
      <p>Contador: {contar}</p>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'ativo' : 'inativo'}</button>
    </div>
  );
}

export default App;
