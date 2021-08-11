import React from 'react'

const App = () => {
  const [ form, setForm ] = React.useState({
    nome: '',
    email: '',
  })

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  function handleChange({target}) {
    const { id, value } = target;
    console.log(id, value)
    setForm({...form, [id]: value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
          <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}></input>
          {form.nome}
          <br></br>
          <br></br>
        <label htmlFor="email">Email: </label>
          <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}></input>
          {form.email}
          <br></br>
          <br></br>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default App
