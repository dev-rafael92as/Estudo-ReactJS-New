import React from 'react';
import Home from './Home';
import Links from './Links';
import Produtos from './Produtos'

const App = () => {
  
  const { pathname } = window.location
  let Pagina
  if (pathname === "/Produtos") {
    Pagina = Produtos
  } else {
    Pagina = Home
  }

  return <div>
    <Links />
    <Pagina />
  </div>
}

export default App;