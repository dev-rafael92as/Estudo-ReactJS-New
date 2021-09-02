import React from 'react';
import URL from '../URL';

const PhotoGet = () => {
  const [id, setId] = React.useState('');
  const [photo, setPhoto] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${URL}/api/photo/${id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setPhoto(json.photo.src)
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Enviar</button>
      <hr></hr>
      <img src={photo}></img>
    </form>
    
  );
};

export default PhotoGet;
