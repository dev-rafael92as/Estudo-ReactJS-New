import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../Hooks/useForm'
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  
  const {userLogin, error, loading} = React.useContext(UserContext)

async function handleLogin(event) {
  event.preventDefault();

  if(username.validate() && password.validate()) {
    userLogin(username.value, password.value)
  }
}

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input type="text" label="Usuário" name="username" {...username}/>
        <Input type="password" label="Senha" name="password" {...password}/>
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastrar</Link>
      <Link to="/login/resetar">Resetar</Link>
    </section>
  )
}

export default LoginForm
