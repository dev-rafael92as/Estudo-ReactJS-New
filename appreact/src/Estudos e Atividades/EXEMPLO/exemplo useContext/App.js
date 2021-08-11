import React from 'react'
import { GlobalStorage } from './GlobalContext' //foi importado assim pois a exportação não era em "default"
import Produto from './Produto'

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App
