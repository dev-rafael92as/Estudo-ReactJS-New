import React from 'react'

const Input = ({id, label, onChange, value, type, onBlur, placeholder, error}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type} 
        id={id} 
        onChange={onChange}
        name={id}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        />
        {error && <p>{error}</p>}
    </>
  )
}

export default Input
