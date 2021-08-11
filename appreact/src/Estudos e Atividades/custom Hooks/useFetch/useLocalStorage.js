import React from 'react'

const useLocalStorage = (key, inicial) => {
  const [ state, setState ] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  }); // essa primeira parte do código irá verificar se ja existe algum valor para a chave no localStorage, e se existir vai coletar essas informações assim que a página for renderizada

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])
      // essa parte reativa irá atribuir no localStorage toda vez que ouver uma atualização nos valores da chave ou dados do "state"

  return [ state, setState ]
};

export default useLocalStorage;