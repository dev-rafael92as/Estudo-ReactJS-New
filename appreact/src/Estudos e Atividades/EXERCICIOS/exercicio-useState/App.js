import React from 'react'


const App = () => {
  const [ ativo, setAtivo ] = React.useState(true);
  const [ rafael, setRafael ] = React.useState({nome: 'Rafael',  idade: '28'})
  const [ maria, setMaria ] = React.useState({nome: 'Maria',  idade: '31'})


  function handleClick() {
    setAtivo(!ativo);
    setRafael({...rafael, profissao: 'Programador'})
    if (ativo === true) {
      document.querySelector(".conteudo").innerHTML = ''
      document.querySelector(".conteudo").innerHTML = 
        `<p>Nome:${rafael.nome}</p>
        <p>Idade:${rafael.idade}</p>` 
    } else {
      document.querySelector(".conteudo").innerHTML = ''
      document.querySelector(".conteudo").innerHTML = 
      `<p>Nome:${maria.nome}</p>
      <p>Idade:${maria.idade}</p>`
    }
  } 

  return (
    <div>
      <p>Nome: {rafael.nome}</p>
      <p>Idade: {rafael.idade}</p>
      <p>Prodissão: {rafael.profissao}</p> 
    <button onClick={handleClick}>{!ativo ? 'Rafael Ativo' : 'Maria Ativo'}</button>
    <hr></hr>
    <div className="conteudo">
    </div>
    </div>
  )
}

export default App