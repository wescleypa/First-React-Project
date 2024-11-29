import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  const [cardsFuncionarios] = useState([
    { id: 1, title: "Funcionários", qtd: 83 },
    { id: 2, title: "Equipe RH"   , qtd: 83 }
  ]);

  return (
    <div>
      <Menu/>
      
      
    </div>
  );
}

export default App;
