import { useEffect } from 'react';
import './index.scss';
import title from './img/title.png';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen = ({ onAnimationEnd }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [onAnimationEnd]);

  return (
    <div className="splash-screen">
      <div className="splash-screen__cover"></div>
      <img className="splash-screen__image" src={title} alt="Splash image" />
    </div>
  );
};
export default SplashScreen;
