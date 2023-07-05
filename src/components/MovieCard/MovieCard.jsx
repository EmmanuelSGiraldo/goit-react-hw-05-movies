import PropTypes from "prop-types";
import { Outlet, NavLink } from "react-router-dom";
import Styles from "./MovieCard.module.scss";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

const DEFAULT_POSTER_URL =
  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg";

const MovieCard = ({ info }) => {
  const { title, poster_path, vote_average, overview, genres } = info;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
    : DEFAULT_POSTER_URL;

  const getGenres = (genres) => {
    if (genres) {
      const genresList = genres.map((genre) => genre.name).join(", ");
      return genresList;
    }
    return null;
  };

  const vote = Math.round(vote_average * 10);

  return (
    <main>
      <div className={Styles.Wrap}>
        <img className={Styles.Image} src={posterUrl} alt={title} width={342} />
        <div className={Styles.Info}>
          <h1>{title}</h1>
          <p>User Score: {vote}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{getGenres(genres)}</p>
        </div>
      </div>
      <div className={Styles.AddInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink className={Styles.AddLink} to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={Styles.AddLink} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

MovieCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieCard;
