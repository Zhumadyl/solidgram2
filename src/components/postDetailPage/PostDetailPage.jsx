import React from 'react'
import messege from '../../assets/message.png'

import css from './PDP.module.css'

function PostDetailPage(props) {
    console.log(props)
    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg" alt="" />

            </div>
            <div className={css.comment}>
                <div className={css.author}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width='30px' height='30px' />
                    <b>nick_name</b>
                    <img src="https://cdn-icons-png.flaticon.com/512/3018/3018442.png" alt="" width='25px' height='25px' />
                </div>
                <div className={css.authorsWord}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width='30px' height='30px' />
                    <div className={css.flex}><b>nick_name</b> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, minima.</p></div>

                </div>
                <div className={css.time}><p>time</p></div>
                <div>
                    <div className={css.comments}>Comments here</div>
                </div>
                <div className={css.action}>
                    <div className={css.likes}>
                        <img src='https://cdn-icons-png.flaticon.com/512/1077/1077035.png' alt="" width='25px' />
                        <img src='https://cdn-icons-png.flaticon.com/512/3115/3115518.png' alt="" width='25px' />
                        <img src='https://cdn-icons-png.flaticon.com/512/3024/3024593.png' alt="" width='25px' />
                        <img src='https://cdn-icons-png.flaticon.com/512/5667/5667029.png' alt="" width='25px' />
                    </div>
                    <div className={css.liked}>
                        <b>Liked: 9836</b>
                        <p>time</p>
                    </div>

                </div>
                <div className={css.postFooter}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1441/1441204.png" alt="" width='30px' />
                    <input type="text" placeholder="Добавить комментарий ..." />
                    <a href="">Опубликовать</a>
                </div>
            </div>


        </div>

    )
}

export default PostDetailPage

