import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import SplashScreen from './components/SplashScreen/SplashScreen.tsx';
import './App.scss';

const App = () => {
  const [isAnimationFinished, setAnimationFinished] = useState<boolean>(false);

  const handleAnimationEnd = (): void => {
    setAnimationFinished(true);
  };

  return (
    <>
      {!isAnimationFinished ? (
        <SplashScreen onAnimationEnd={handleAnimationEnd} />
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
};

export default App;
