import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
