import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../Sobre'
import Header from './Header'
import NaoEncontrado from './NaoEncontrado'
import Produto from './Produto'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrado />} />
        <Route path="produto/:id/*" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
