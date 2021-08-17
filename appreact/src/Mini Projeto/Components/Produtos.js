import React from 'react'
import { Link } from 'react-router-dom';
import Head from '../../Routes e Router/Head'
import styles from './Produtos.module.css'

const Produto = () => {
  const [ produtos, setProdutos ] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then((r) => r.json()).then((json) => setProdutos(json));
  },[])
    if (produtos === null) return null
  return (
    <section className={styles.produtos + ' animeLeft'}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}></img>
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
      <Head title="Ranek | Produtos" description="Esses são os Produtos" />
    </section>
  )
}

export default Produto
