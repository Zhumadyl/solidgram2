import React from 'react'
import css from './Comments.module.css'

function Comments({author , comment, likes , createdAt}) {
    let date = new Date(createdAt).toLocaleString();
    return (
        <div className={css.wrapper}>
            <div className={css.commemt}>
                <b className={css.author}>{author}</b>
                {" "}
                {comment}
            </div>
            <div className={css.actions}>
                <div>Likes: {likes}</div>
                <div>{date}</div>
            </div>

        </div>
    )
}

export default Comments