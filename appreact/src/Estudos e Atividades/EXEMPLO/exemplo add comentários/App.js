import React from 'react'

const App = () => {
  const [ comentario, setComentario ] = React.useState([])
  const [ input, setInput ] = React.useState('')
  const inputElement = React.useRef()

  function handleClick() {
    setComentario([...comentario, input])
    setInput('');
    inputElement.current.focus();
  }
  return (
    <div>
      <ul>
        {comentario.map((coment) => (<li key={coment}>{coment}</li>))}
      </ul>
      <input 
        type="text" 
        ref={inputElement}
        value={input} 
        onChange={(event) => setInput(event.target.value)}></input>
      <br />
      <br />
      <button onClick={handleClick}>Comentar</button>
    </div>
  )
}

export default App
