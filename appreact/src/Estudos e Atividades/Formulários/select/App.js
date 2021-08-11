import React from 'react'

const App = () => {
  const [ select, setSelect ] = React.useState('')
  return (
    <form>
      <select 
        id={'atributos'}
        value={select}
        onChange={({target}) => setSelect(target.value)}>
        <option disabled value={''}>Selecione</option>
        <option value={'nome'}>Nome</option>
        <option value={'idade'}>Idade</option>
      </select>
      {select}
    </form>
  )
}

export default App
