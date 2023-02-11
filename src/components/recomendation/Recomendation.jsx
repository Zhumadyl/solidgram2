import React from 'react'
import css from './Recomendation.module.css'

function Recomendation() {
    return (
        <div className={css.wrapper}>
            <div className={css.headPart}>
                <div className={css.flex}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" width='60px' />
                    <div>
                        <h4>azzimov.05</h4>
                        <p>Rich V</p>
                    </div>
                </div>
                <a href="">Переключиться</a>
            </div>
            <div className={css.recPeople}>
                <p>Рекомендации для вас</p>
                <a href=""><strong>Все</strong></a>
            </div>
            <div>
                <People logo='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' nick='unknown'/>
                <People logo='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' nick='unknown2'/>
                <People logo='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' nick='unknown3'/>
                <People logo='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' nick='unknown4'/>
                <People logo='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' nick='unknown5'/>

            </div>
        </div>
    )
}

export default Recomendation

function People(props){
    return(
        <div className={css.flexit}>
            <div className={css.flex}>
                <div className={css.border}>
                    <img src={props.logo} alt="" width='36px'/>
                </div>
                <div>
                    <h4 className={css.h4}>{props.nick}</h4>
                    <p className={css.p}>Рекомендации для вас</p>
                </div>
            </div>
            <div>
                <a href="Подписаться">Подписаться</a>
            </div>
        </div>
    )

}