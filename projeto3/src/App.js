import './App.css';
import Header from './Header/Header';
import Input from './Input/Input';
import Card from './Card/Card';

const menu = ['Home', 'Services', 'Showcase', 'Packages', 'Contact'];
const places = [
  {
    id: 1,
    name: 'Praia',
    quantity: 'Não tem',
    price: '20,00',
    food: 'Alimentação é permitida',
  },
  {
    id: 2,
    name: 'Praia 2',
    quantity: 'Tem duas casas',
    price: 'R$ 120,00',
    food: 'Alimentação está inclusa no valor',
  },
  {
    id: 3,
    name: 'Praia 3',
    quantity: 'Tem uma casa',
    price: 'R$ 220,00',
    food: 'Alimentação não inclusa',
  },
];

function App() {
  return (
    <div>
      <Header menu={menu} />
      <Input />
      <Card places={places} />
    </div>
  );
}

export default App;
