import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./App.module.scss";
import SharedLayout from "../SharedLayout/SharedLayout";
import ErrorPage from "../ErrorPage/ErrorPage";

const Home = lazy(() => import("../../pages/Home"));
const Movies = lazy(() => import("../../pages/Movies"));
const MoviesDetails = lazy(() => import("../../pages/MoviesDetails"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const containerClass = isDarkMode
    ? `${styles.container} ${styles.dark}`
    : `${styles.container}`;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={containerClass}>
        <button onClick={toggleDarkMode} className={styles.toggleButton}>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className={isDarkMode ? styles.sunIcon : styles.moonIcon}
        />
      </button>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};
