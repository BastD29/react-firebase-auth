import { FC } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import style from "./Home.module.scss";

const Home: FC = () => {
  const location = useLocation();

  const renderHeading = () => {
    switch (location.pathname) {
      case "/signin":
        return "Already have an account? Please sign in";
      case "/signup":
        return "Don't have an account yet? Please register";
      default:
        return "Welcome, please connect";
    }
  };

  return (
    <div className={style["home"]}>
      <h2>{renderHeading()}</h2>
      <nav className={style["home__nav"]}>
        <NavLink
          to="/signin"
          className={({ isActive }) => (isActive ? style["active"] : "")}
        >
          Sign in
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => (isActive ? style["active"] : "")}
        >
          Sign up
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
