import React from 'react'
import { GlobalContext } from './GlobalContext'

const Adicionar = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      <button onClick={global.handleClick1}>Mostrar Nomes Produtos</button>
      <button onClick={global.handleClick2}>Mostrar Preço Produtos</button>
    </div>
  )
}

export default Adicionar
