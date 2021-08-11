import React from 'react'

const Links = () => {
  const link = window.location.pathname

  return (
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Produtos">Produtos</a></li>
      </ul>
    </div>
  )
}

export default Links
