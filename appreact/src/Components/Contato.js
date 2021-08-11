import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from '../Routes e Router/Head'

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever"></img>
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>rafael@origamid.com</li>
          <li>(99) 99999-9999</li>
          <li>Rua Aqui Bem Perto, 999</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
