import React from 'react';

const useFetch = () => {
  const [ data, setData ] = React.useState(null);
  const [ error, setError ] = React.useState(null);
  const [ loading, setLoading ] = React.useState(false);

  const request = React.useCallback(async ( url, options) => {
    // usamos o let apenas para já declarar as variaveis e conseguir alterar o valor dentro da função.
    let response;
    let json;
    try {
      setLoading(true)
      setError(null)
      response = await fetch( url, options );
      json = await response.json();
      if (response.ok === false) throw new Error (json.message);
    } catch (err) {
      // Pois no caso de erro na requisição o json assume a mensagem de erro, então caso aconteça é necessário limpar a memória para em uma nova tentativa mostrar a resposta certa.
      json = null;
      setError(err.message)
    } finally {
      setData(json);
      setLoading(false);
      return { 
        response, 
        json
      }
    }
  }, [])

  return {
    data,
    error,
    loading,
    request,
  }
}

export default useFetch