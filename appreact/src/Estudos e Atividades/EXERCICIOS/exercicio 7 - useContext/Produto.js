import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext);
  
  if (global.dados === null) return null
  

  

  return (
    <div>
      <h1>Produtos:</h1>
      <div>
        <ul style={{border: '1px solid'}}>{global.nomes}</ul>
      </div>
      <div>
        <ul style={{border: '1px solid'}}>{global.preco}</ul>
      </div>
    </div>
  )
}

export default Produto
