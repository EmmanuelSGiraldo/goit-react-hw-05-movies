import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9075f13015b8e53ed9a052e56b6922a0';

export const fetchPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchMoviesWithQuery = async (query) => {
    const searchParams = new URLSearchParams({
        include_adult: false,
        language: 'en-US',
        page: 1,
        query: query,
        api_key: API_KEY,
    });

    const response = await axios.get(`${BASE_URL}search/movie?${searchParams}`);
    return response.data.results;
};

export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export const fetchMovieCast = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
};


export const fetchMovieReview = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
    return response.data.results;
};

