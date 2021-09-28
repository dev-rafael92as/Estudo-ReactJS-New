import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../Hooks/useForm'
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Head from '../Helper/Head';

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
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input type="text" label="Usuário" name="username" {...username}/>
        <Input type="password" label="Senha" name="password" {...password}/>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
        <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos!'}/>
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
