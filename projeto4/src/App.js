import './App.css';
import React from 'react';
import Input from './Components/Forms/Input';
import Select from './Components/Forms/Select';
import Radio from './Components/Forms/Radio';
import Checkbox from './Components/Forms/Checkbox';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('amarelo');
  const [fruta, setFruta] = React.useState([]);

  return (
    <div>
      <form>
        <Checkbox
          options={['Uva', 'Laranja', 'Limão']}
          value={fruta}
          setValue={setFruta}
        />
        <Radio
          options={['azul', 'verde', 'amarelo']}
          value={cor}
          setValue={setCor}
        />
        <Select
          options={['Notebook', 'Smartphone', 'Tablet']}
          value={produto}
          setValue={setProduto}
        />
        <Input
          label="Nome"
          id="nome"
          type="text"
          value={nome}
          setValue={setNome}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          value={email}
          setValue={setEmail}
          requried
        />
        <button></button>
      </form>
    </div>
  );
}

export default App;
