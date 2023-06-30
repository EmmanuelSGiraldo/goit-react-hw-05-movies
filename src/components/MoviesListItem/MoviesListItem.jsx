import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./MoviesListItem.module.scss";

const DEFAULT_POSTER_URL =
  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg";

const MoviesListItem = ({ id, url, title }) => {
  const location = useLocation();

  return (
    <li className={styles.MoviesItem}>
      <Link
        to={`/movies/${id}`}
        className={styles.ItemLink}
        state={{ from: location }}
      >
        <img
          src={
            url ? `https://image.tmdb.org/t/p/w342/${url}` : DEFAULT_POSTER_URL
          }
          alt={title}
          className={styles.Image}
          loading="lazy"
        />
        <p className={styles.Info}>{title}</p>
      </Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default MoviesListItem;
