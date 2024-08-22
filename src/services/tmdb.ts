import axios from 'axios';
import { Movie, FetchMovieResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async (): Promise<Movie[] | undefined> => {
  try {
    const response = await axios.get<FetchMovieResponse>(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=cs-CZ&page=1`,
    );
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching movies:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};
