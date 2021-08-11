import React from 'react'

const App = () => {
  const [ produto , setProduto ] = React.useState('')
  const [ cor , setCor ] = React.useState('')


  return (
      <form>
        <h2>Produto</h2>
      {produto}
        <label>
            <input 
              type="radio" 
              onChange={({target}) => setProduto(target.value)} 
              checked={produto === 'smartphone'}
              value="smartphone"
            />
          Smartphone
        </label>
          <label>
            <input 
              type="radio" 
              onChange={({target}) => setProduto(target.value)} 
              checked={produto === 'computador'}
              value="computador"/>
            Computador
          </label>
          <h2>Cores</h2>
          {cor}
          <label>
            <input 
              type="radio"
              onChange={({target}) => setCor(target.value)}
              checked={cor === 'azul'}
              value = 'azul'
             ></input>
            Azul
          </label>
          <label>
            <input 
              type="radio"
              onChange={({target}) => setCor(target.value)}
              checked={cor === 'vermelho'}
              value = 'vermelho'
             ></input>
            Vermelho
          </label>
      </form>
  )
}

export default App
