import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, type, name, onChange, value, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label 
        className={styles.label} 
        htmlFor={name} 
        name={name}
        >{label}
      </label>
      <input 
        type={type} 
        className={styles.input} 
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        />
        <p className={styles.error}>{error}</p>
    </div>
  )
}

export default Input
