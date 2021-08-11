// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dados de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

//Essa é a função utilizada para realizar o POST para
//fetch('http://ranekapi.origamid.dev/json/api/usuario', {
//  method: 'POST',
//  headers: {
//    'Content-Type': 'application/json',
//  },
  //form é o objeto com os dados do formulário
//  body: JSON.stringify(form),
//});

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

import React from 'react'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  }, 
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
]

const App = () => {
  const [form, setForm ] = React.useState(
    formFields.reduce((acc, filds) => {
      return {
        ...acc, 
        [filds.id]:''
      };
    }, {})
  );

  const [ response, setResponse ] = React.useState(null);

  function handleChange({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
        body: JSON.stringify(form),
    }).then(response => {
      setResponse(response)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type}) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            name={id}
            id={id}
            type={type}
            onChange={handleChange}
            value={form[id]}>
            </input>
        </div>
      ))};
      {response && response.ok && <p>Formulário Enviado com Sucesso!!</p>}
      {response && !response.ok && <p>Não enviado, revise as respostas!!</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App
