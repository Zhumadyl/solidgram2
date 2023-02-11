import React from "react";
import Input from "../../components/input/Input";
import styles from "../loginPage/LoginPage.module.css";
import { Link } from 'react-router-dom'


function LoginPage() {
  return (
    <div>
      <form className={styles.form}>
        <div className={styles.insta}></div>
        <Input
          type="text"
          placeholder="Телефон, имя пользователя или эл. адрес"
        />
        <Input type="password" placeholder="Пароль" />
        <Link to='/'>
        <button src='/' className="btn">Войти</button>
        </Link>
        <div className="container">
          <hr />
          <p>ИЛИ</p>
          <hr />
        </div>
        <div className="container2">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="" />
          <a href="https://www.facebook.com/">Войти через Facebook</a>
        </div>
        <a type="submit" id="submit" href="">
          Забыли пароль?
        </a>
      </form>
      <div className="container3">
        <p>
          У вас еще нет аккаунта?<a href="">Зарегестрироваться</a>
        </p>
      </div>
      <div className="container4">
        <p>Установите приложение.</p>
        <div className="imagesicon">
          <img src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/E_2mQvC3HG-.png"  />
          <img src="	https://static.cdninstagram.com/rsrc.php/v3/yr/r/fDjwyLC88oO.png
"  />
        </div>
      </div>
      <div className="iconimg">
      </div>
    </div>
  );
}

export default LoginPage;
