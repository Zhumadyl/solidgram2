import css from "./SideBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { sideBarElements } from "../../constants";

const CustomLink = (props) => {
  const location = useLocation();
  return (
    <Link
      className={`${css.link} ${
        location.pathname === props.to ? css.active : ""
      }`}
      to={props.to}
    >
      <img width="20" height='20px' src={props.icon} alt="Home" />
      {props.title}
    </Link>
  );
};

function SideBar() {
  const render = sideBarElements.map((el) => (
    <CustomLink key={el.title} {...el} />
  ));
  return (
    <aside className={css.wrapper}>
      <img width='170px' src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1" alt="" />
      {render}
      {/* <CustomLink to='/' title="Главная" src="dfsfsdf" /> */}
    </aside>
  );
}

export default SideBar;