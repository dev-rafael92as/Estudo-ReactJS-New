import React from 'react';
import styles from './Input.module.css'

const Imput = ({value, onChange}) => {

  function handleChange(event) {
    onChange(event.target.value)
  }

  return (
    <div className={styles.containerInput}>
    <input value={value} onChange={handleChange}></input>
    </div>
  )
}

export default Imput