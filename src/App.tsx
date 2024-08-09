import './App.css';
import { useEffect } from 'react';
import { fetchMovies } from './services/tmdb';

const App = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Projekt</h1>
    </>
  );
};

export default App;
