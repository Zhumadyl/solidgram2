import React, { useState } from 'react'
import c from './Input.module.css'

function Input(props) {
  return (
    <label className={c.wrapper} >
        <input className={c.input} {...props} id='input' />
    </label>
  )
}

export default Input