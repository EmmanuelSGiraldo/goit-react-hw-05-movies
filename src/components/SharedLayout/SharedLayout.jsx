import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./SharedLayout.module.scss";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <header className={styles.Header}>
        <nav>
          <NavLink className={styles.Link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.Link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
