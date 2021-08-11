import React from 'react';

const produtos = [
  { 
    id: 1,
    nome: "Smatphone",
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  { 
    id: 2,
    nome: "Notebook",
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'], 
  },
  { 
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786']
  },
];
  
  console.log({produtos})
const App = () => {
    return (
    <ul>
      {produtos
        .filter((preco) => Number(preco.preco.replace('R$ ', '') > 1500))
        .map(({id, cores, nome, preco}) => (
          <li key={id}>
            <h1>{nome}</h1>
            <p>Preço: {preco}</p>
            <div>
              <ul>
                {cores.map((cor) => (
                  <li key={cor} style={{background: cor , color: "white", textDecoration: 'none', margin: '10px', padding: '2px'}}>{cor}</li>
                ))}
                </ul>
            </div>
          </li>))}
    </ul>
    )}    
 
export default App;