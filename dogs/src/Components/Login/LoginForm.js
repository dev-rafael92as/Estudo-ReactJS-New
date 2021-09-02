import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

function handleLogin(event) {
  event.preventDefault();
  fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }).then((response) => {
    console.log(response)
    return response.json()
  }).then((json) => {
      console.log(json);
    });
}

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input type="text" label="Usuário" name="username"/>
        <Input type="password" label="Senha" name="password"/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrar</Link>
      <Link to="/login/resetar">Resetar</Link>
    </section>
  )
}

export default LoginForm
