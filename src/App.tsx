import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { LanguageContext } from './settings/settings.ts';
import Header from './components/Header/Header.tsx';
import SplashScreen from './components/SplashScreen/SplashScreen.tsx';
import Footer from './components/Footer/Footer.tsx';
import './App.scss';

const App = () => {
  const [isAnimationFinished, setAnimationFinished] = useState<boolean>(false);
  const [language] = useState<string>(window.navigator.language);

  const handleAnimationEnd = (): void => {
    setAnimationFinished(true);
    sessionStorage.setItem('splashScreenSeen', 'true');
  };

  useEffect(() => {
    const splashScreenSeen = sessionStorage.getItem('splashScreenSeen');
    if (splashScreenSeen === 'true') {
      setAnimationFinished(true);
    }
  }, []);

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
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
