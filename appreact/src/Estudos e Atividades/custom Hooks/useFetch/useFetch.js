import React from 'react'

const useFetch = () => {
const [ data, setData ] = React.useState(null);
const [ error, setError ] = React.useState(null);
const [ loading, setLoading ] = React.useState(null);

const request = React.useCallback( async (url, options) => {
  let response;
  let json;
  try {
    setError(null)
    setLoading(true)
    await new Promise( resolve => {
      setTimeout(() => resolve(), 2000)
    })
    response = await fetch(url, options);
    json = await response.json();
  } catch (erro) {
    json = null
    setError('Houve algum problema!!')
  } finally {
    setData(json)
    setLoading(false)
    return { response, json }
  }
}, [])

return { data, error, loading, request, loading } 
}

export default useFetch