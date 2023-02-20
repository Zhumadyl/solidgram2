import React from "react";
import css from "./Post.module.css";
import heard from '../../assets/saveicon.png'
import more from '../../assets/more.png'
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";


function Post(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.postHeader}>
        {props.author}
        <img src={more} alt="" width='30px' />
      </div>
      <Link to={`/post/${props.id}`} className={css.image} >
        <img className={css.imgMain}
          src={props.image}
          alt="Image"
        />
      </Link>
      <div className={css.actions}>
        <img src='https://cdn-icons-png.flaticon.com/512/9645/9645664.png' alt="" width='30px' />
        <img src='https://cdn-icons-png.flaticon.com/512/7263/7263949.png' alt="" width='25px' height='25px' />
        <img src='https://cdn-icons-png.flaticon.com/512/3171/3171060.png' alt="" width='30px' />
        <img src={heard} alt="" width='30px' className={css.last} />
      </div>
      <div className={css.likes}>Actions Likes:{props.like}</div>
      <div className={css.info}>Info</div>
      <div className={css.postFooter}>
        <img src="https://cdn-icons-png.flaticon.com/512/1441/1441204.png" alt="" width='30px'/>
        <input type="text" placeholder="Добавить комментарий ..." />
        <a href="">Опубликовать</a>
      </div>
      <div className={css.comments}>
        <b>Comments:</b>
        {
          props.comments.map((item) => <Comments key={item.id} {...item}/>)
        }
      </div>
    </div>
  );
}

export default Post;