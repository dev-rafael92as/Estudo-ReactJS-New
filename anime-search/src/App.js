import React, { useEffect } from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import Pagination from './Components/Pagination';
import qs from 'qs'

function App() {
  const [text, setText] = React.useState('')
  const [ result, setResult ] = React.useState({})
  const [ loading, setLoading ] = React.useState(false)
  const [ offset, setOffset ] = React.useState(0)

  const pathAPI = 'https://kitsu.io/api/edge'

  useEffect(() => {
    const query = {
      page: {
        limit: LIMIT,
        offset
      }
    }
    if(text) {
      query.filter = {
        text,
      }
    }
    fetch(`${pathAPI}/anime?${qs.stringify(query)}`).then((response) => response.json()).then((response) => (setResult(response)));
  },[offset])

  // limite de itens na busca por página
  const LIMIT = 12

  function handleFetch(event) {
    setLoading(true)
    event.preventDefault();
    fetch(`${pathAPI}/anime?filter[text]=${text}&page[limit]=${LIMIT}`).then((response) => response.json()).then((response) => (setResult(response)));
    setLoading(false)
  }
  React.useEffect(() => {
    console.log(result)
  },[result])
  return (
    <div className="container">
      <h1>Buscar Animes</h1>
      <form onSubmit={handleFetch}>
      <Input value={text} onChange={(search) => setText(search)}/>
      <Button>Buscar</Button>
      </form>
      {loading == true && <span>Carregando...</span>}
      {result.data && (
        <ul className="anime-list">
          {result.data.map((anime) => (
            <li key={anime.id}>
              <img 
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle} />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
      {result.meta && (
        <Pagination 
          limit={LIMIT} 
          total={result.meta.count} 
          offset={offset} 
          setOffset={setOffset}
        />
      )}
    </div>
  );
}

export default App;
