import React from 'react'

const App = () => {

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'amarelo']

  const [ cor, setCor] = React.useState(['vermelho', 'azul'])

  function handleChange({target}) {
    if(target.checked) {
      setCor([...cor, target.value])
    } else {
      setCor(cor.filter((cor) => cor !== target.value))
    }
  }

  return (
    <div>
      <form>
        {coresArray.map((cores) => 
        <label key={cores}>
          <input 
            type="checkbox"
            value={cores}
            onChange={handleChange}
            checked={cor.includes(cores)}
          />
          {cores}
        </label>
      )}
      </form>
    </div>
  )
}

export default App
