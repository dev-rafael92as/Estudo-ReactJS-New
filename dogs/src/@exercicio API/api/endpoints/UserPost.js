import React from 'react';
import URL from '../URL';

const UserPost = () => {
  //estados reativos para coletar as informações inseridas nos imputs
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  // função que está atrelada ao botão enviar que faz o fetch com a api da origamid e faz o cadastro de conta (caso não tenha nenhuma igual no banco de dados) e retorna o status via console log do requisição
  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${URL}/api/user`, {
      method: 'POST',
      // atenção ao cabeçalho da conecção com a api
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;