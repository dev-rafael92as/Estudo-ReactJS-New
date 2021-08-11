import React from 'react'
import useLocalStorage from '../useLocalStorage'
import useFetch from '../useFetch'

const App = () => {
  const [ produto, setProduto ] = useLocalStorage('produto', '')
  const  {request, data, loading, error }  = useFetch()

  React.useEffect(() => {
    async function fetchData() {
    const {response, json } = await request('https://ranekapi.origamid.dev/json/api/produto') //Essa parte de response e json desestruturada garante acesso a alguns status da requisição. Utilize um console.log(response) para verifica-los.
    console.log({response, json})
    } fetchData()
  }, [request])
  
  function handleClick({target}) {
    setProduto(target.innerText)
  }

  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando...</p>
  if(data)
    return (
      <div>
        <h1>Produto: {produto}</h1>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>notebook</button>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome} está sendo vendido a R$ {produto.preco}</h1>
          </div>
        ))}
      </div>
  ) 
  else return null 
}

export default App
