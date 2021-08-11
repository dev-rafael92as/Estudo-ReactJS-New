const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border: '1px solid red', padding: '10px'}}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto
