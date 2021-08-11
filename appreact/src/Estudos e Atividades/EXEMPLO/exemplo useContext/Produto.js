import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext)

  return (
    <div>
      <h1>A quantidade de produtos são: {global.contar}</h1>
      <button onClick={() => global.adicionarUm()}>Adicionar</button>
    </div>
  )
}

export default Produto
