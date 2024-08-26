import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import SplashScreen from './components/SplashScreen/SplashScreen.tsx';
import { LanguageContext } from './settings/settings.ts';
import './App.scss';

const App = () => {
  const [isAnimationFinished, setAnimationFinished] = useState<boolean>(false);
  const [language] = useState<string>(window.navigator.language);

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
          <LanguageContext.Provider value={{ language }}>
            <Outlet />
          </LanguageContext.Provider>
        </>
      )}
    </>
  );
};

export default App;
