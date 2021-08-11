import React from 'react'

const Radio = ({pergunta, options, id, onChange, value, active}) => {

  if(active === false) return null
  return (
    <fieldset style={{ marginBotton: '1rem', border: '2px solid #eee'}}>
      <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
      {options.map((option) => (
        <label 
          key={option}
          style={{ marginBotton: '1rem', fontFamily: 'monospace'}}      >
            <input 
              id={id}
              type='radio' 
              value={option} 
              onChange={onChange}
              checked={value === option}
            />
          {option}
        </label>
       ))}
    </fieldset>
  )
}

export default Radio
