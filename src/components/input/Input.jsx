import React from 'react'
import c from './Input.module.css'

function Input(props) {
  return (
    <label className={c.wrapper}>
        <input className={c.input} {...props} />
    </label>
  )
}

export default Input