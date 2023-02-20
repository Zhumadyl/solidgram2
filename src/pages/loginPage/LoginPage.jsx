import React from "react";
import Input from "../../components/input/Input";
import styles from "../loginPage/LoginPage.module.css";
import { Link } from 'react-router-dom'


function LoginPage() {
  return (
    <div className="wrapper" >
      <form className={styles.form}>
        <div className={styles.insta}></div>
        <Input
          type="text"
          placeholder="Телефон, имя пользователя или эл. адрес"
        />
        <Input type="password" placeholder="Пароль" />
        <a href='https://www.instagram.com/'  className="btn">Войти</a>
        <div className="container">
          <hr />
          <p>ИЛИ</p>
          <hr />
        </div>
        <div className="container2">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt=""  width='18px'/>
          <a href="https://www.facebook.com/">Войти через Facebook</a>
        </div>
        <a type="submit" id="submit" href="">
          Забыли пароль?
        </a>
      </form>
      <div className='container3'>
        <p>
          У вас ещё нет аккаунта?<a href="">Зарегестрироваться</a>
        </p>
      </div>
      <div className="container4">
        <p>Установите приложение.</p>
        <div className="imagesicon">
          <img src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/E_2mQvC3HG-.png"  width='135px'/>
          <img src="	https://static.cdninstagram.com/rsrc.php/v3/yr/r/fDjwyLC88oO.png
"  width='135px' />
        </div>
      </div>
      <div className="iconimg">
      </div>
      <div className="end">
        <a href="">Meta</a>
        <a href="">Информация</a>
        <a href="">Блог</a>
        <a href="">Вакансии</a>
        <a href="">Помощь</a>
        <a href="">API</a>
        <br />
        <a href="">Конфиденциальность</a>
        <a href="">Условия</a>
        <a href="">Популярные аккаунты</a>
        <a href="">Места</a>
        <br />
        <a href="">Instagram Lite</a>
      </div>
      <div className="copyright">
         <p>© 2023 Instagram from Meta</p>
      </div>
    </div>
  );
}

export default LoginPage;
