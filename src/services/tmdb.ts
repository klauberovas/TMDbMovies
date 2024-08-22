import axios from 'axios';
import { Movie, FetchMovieResponse } from '../types/movies';
import { Movie as MovieDetail } from '../types/movieDetail';

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

export const fetchMovieDetail = async (
  id: string | undefined,
): Promise<MovieDetail | undefined> => {
  if (!id) {
    return undefined;
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=cs-CZ&page=1`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching movies:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};
