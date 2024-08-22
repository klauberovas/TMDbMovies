import './style.scss';
import title from './img/title.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={title} alt="title Cineverse" />
    </header>
  );
};
export default Header;
