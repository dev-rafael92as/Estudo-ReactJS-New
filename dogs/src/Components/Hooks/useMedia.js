import React from 'react';

const useMedia = (media) => {
  const [ match, setMatch ] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      // {matches} = atributo desestruturado da window.matchMedia (que retorna true or false)
      const {matches} = window.matchMedia(media);
      setMatch(matches);
    } changeMatch()
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('rezise', changeMatch);
    }
  }, [media])

  return match
}

export default useMedia