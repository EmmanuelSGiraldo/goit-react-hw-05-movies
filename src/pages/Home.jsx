import { useState, useEffect } from "react";
import { fetchPopularMovies } from '../API';
import { Notify } from "notiflix";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";
import styles from "./Home.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTrendingMovies();

    async function fetchTrendingMovies() {
      setIsLoading(true);
      try {
        const responseMovies = await fetchPopularMovies();
        setMovies(responseMovies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      };
    };
  }, [])

  return (
    <main>
      {error && Notify.failure(`${error.message}`)}
      <h1 className={styles.title}>Trending today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
