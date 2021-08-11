import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Produto from './Components/Produto'
import Contato from './Components/Contato'


// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
        <Routes>
          <Route path="/" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
