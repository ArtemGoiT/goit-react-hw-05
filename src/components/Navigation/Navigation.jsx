import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.navCotainer}>
        <div className={css.logo}>
          <NavLink to="/" className={css.logolink}>
            CinemaTMDB
          </NavLink>
        </div>
        <nav className={css.NavLinks}>
          <NavLink to="/" className={linkClass}>
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
