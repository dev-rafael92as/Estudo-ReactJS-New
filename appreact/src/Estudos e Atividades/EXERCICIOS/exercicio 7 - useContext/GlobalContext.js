import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

  const [ dados, setDados ] = React.useState(null)
  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
    .then(response => response.json())
    .then((json) => setDados(json))}
  , []) 

  const [ nomes, setNomes ] = React.useState(null)

  function handleClick1() {
    setNomes(dados.map((event) => <li key={event.id}>{event.id} {event.nome}</li>) 
    )}
  

    const [ preco, setPreco ] = React.useState(null)

    function handleClick2() {
      setPreco(dados.map((event) => <li key={event.id}>R$ {event.preco}</li>))
    }
  
  function limparDados() {
    setDados(null)
  }
   
  return <GlobalContext.Provider value={ {dados, limparDados, handleClick1, nomes, preco, handleClick2} }>{children}</GlobalContext.Provider>
}