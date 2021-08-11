import React from 'react'

const App = () => {
  const [ nome, setNome ] = React.useState('');
  const [ email, setEmail ] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
          <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}></input>
          <br></br>
          <br></br>
        <label htmlFor="email">Email: </label>
          <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}></input>
          <br></br>
          <br></br>
        <button>Enviar</button>

        <p>{nome}</p>
      </form>
    </div>
  )
}

export default App
