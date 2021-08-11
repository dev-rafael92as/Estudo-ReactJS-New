// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo: 
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app 
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada "limparDados" que é responsável por zerar os dados de produto
// e exponha essa funação no contexto global

import React from 'react'
import Adicionar from './Adicionar'
import { GlobalStorage } from './GlobalContext'
import Limpar from './Limpar'
import Produto from './Produto'

const App = () => {
  return <GlobalStorage>
    <Produto />
    <Adicionar />
    <Limpar />
  </GlobalStorage>
}

export default App
