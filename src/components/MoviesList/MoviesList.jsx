import PropTypes from "prop-types";
import MoviesListItem from "../MoviesListItem/MoviesListItem";
import Styles from "./MoviesList.module.scss";

const MoviesList = ({ movies }) => {
  return (
    <ul className={Styles.List}>
      {movies.map(({ id, title, poster_path }) => (
        <MoviesListItem key={id} id={id} title={title} url={poster_path} />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
