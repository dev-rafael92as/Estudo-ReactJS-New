import React from 'react'

const App = () => {
  const [ textarea, setTextarea ] = React.useState(null)

  return (
    <form>
      <textarea value={textarea}
      rows={'5'}
      onChange={({target}) => setTextarea(target.value)}>
      </textarea>
      {textarea}
    </form>
  )
}

export default App
