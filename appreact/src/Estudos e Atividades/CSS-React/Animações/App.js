import React from 'react';
import './App.css';
import Componente from './Componente';

const App = () => {

  const [ ativar, setAtivar] = React.useState(false)

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      { ativar && <Componente></Componente>}
    </div>
  )
}

export default App
