import axios from 'axios';

const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );
    console.log(response.data);
  } catch (error) {
    console.error('Chyba při získávání filmů:', error);
  }
};
