import React from 'react'
import css from "./Preloader.module.css"

function Preloader() {
  return (
    <div className={css.wrapper}>
      <div id={css.loader}>
        <div id={css.top}></div>
        <div id={css.bottom}></div>
        <div id={css.line}></div>
      </div>
    </div>
  )
}

export default Preloader