import React from 'react'
import css from './Story.module.css'

function Story(props) {
  return (
    <div className={css.wrapper}>
        <div className={css.story}>
            <div>
                <img src={props.src} alt="" width='65px' />
            </div>
            <p>{props.p}</p>
        </div>
    </div>
  )
}

export default Story