import React from 'react'

const App = () => {
  const [contar, setContar ] = React.useState(0)

  React.useEffect(() => {
    console.log(`Executou ${contar}`)
  }, []); 

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default App
