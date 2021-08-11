import React from 'react'

export const GlobalContext = React.createContext(); //o export dessa forma é importante para ser possível a exportação do contexto para toda aplicação necessária

//exportando o Provider
export const GlobalStorage = ({children}) => {
  const [ contar, setContar ] = React.useState(0);

  function adicionarUm() {
    setContar((contar) => contar + 1)
  }

  function adicionarDois() {
    setContar((contar) => contar + 2)
  }

  return <GlobalContext.Provider value={{contar, adicionarUm, adicionarDois}}>{children}</GlobalContext.Provider>
}
// GlobalStorage = esse poderia ser qualquer nome, mas Storage remete a "baú" então é o armazenamento global
// children nesse caso, remete a todo compomente que estiver dentro de App 
// <GlobalStorage>
//    <Produto />    <- aqui dentro esta o children
// </GlobalStorage>