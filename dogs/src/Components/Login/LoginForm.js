import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../Hooks/useForm'
import { TOKEN_POST, USER_GET} from '../../api'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  console.log(password)

React.useEffect(() => {
  const token = window.localStorage.getItem('token');
  if (token) {
    getUser(token)
  }
})

async function getUser(token) {
  const { url, options } = USER_GET(token)
  const response = await fetch(url, options)
  const json = await response.json()
  console.log(json)
}

async function handleLogin(event) {
  event.preventDefault();

  if(username.validate() && password.validate()) {
    const { url, options} = TOKEN_POST({
      username: username.value,
      password: password.value
    })
    const response = await fetch(url , options)
    const json = await response.json()
    window.localStorage.setItem('token', json.token)
    getUser(json.token)  
  }
}

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input type="text" label="Usuário" name="username" {...username}/>
        <Input type="password" label="Senha" name="password" {...password}/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrar</Link>
      <Link to="/login/resetar">Resetar</Link>
    </section>
  )
}

export default LoginForm
