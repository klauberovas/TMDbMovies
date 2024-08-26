import { Link } from 'react-router-dom';
import './index.scss';
import title from './img/title.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={title} alt="title Cineverse" />
      </Link>
    </header>
  );
};
export default Header;
