import React from 'react'
import Checkbox from './Form-Components/Checkbox';
import Input from './Form-Components/Input'
import Radio from './Form-Components/Radio';
import Select from './Form-Components/Select';
import useForm from '.';

const App = () => {
  const [ produtos, setProdutos ] = React.useState('');
  const [ cor, setCor ] = React.useState('');
  const [ fruta, setFruta ] = React.useState('');
  const [ linguagem, setLinguagem ] = React.useState([]);
  
  // Validação CEP
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if(cep.validate() && email.validate() && nome.validate()) {
      alert("Enviou!")
    } else {
      alert("Não Enviado!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkbox</h2>
      <Checkbox 
        options={['Javascript', 'HTML', 'CSS']} 
        value={linguagem} 
        setValue={setLinguagem} 
      />
      <h2>Frutas</h2>
      <Radio 
        options={['Maçã', 'Limão']}  
        value={fruta} 
        setValue={setFruta} 
      />
      <h2>Cores</h2>
      <Radio 
        options={['Azul', 'Vermelho']} 
        value={cor} 
        setValue={setCor} 
      />
      <Select 
        options={['Smatphone', 'Computador']} 
        value={produtos} 
        setValue={setProdutos} 
      />
      <Input 
        id='nome' 
        label='Nome' 
        type='text' 
        {... nome}
      />
      <Input 
        id='sobrenome' 
        label='Sobrenome' 
        type='text' 
        {... sobrenome}
      />
      <Input 
        id='email' 
        label='Email' 
        type='email'
        {... email}
      />
      <Input 
        type='text' 
        label='CEP' 
        id='cep' 
        placeholder='00000-000'
        {... cep}
      />
      <button>Enviar</button>
    </form>
  )
}

export default App
