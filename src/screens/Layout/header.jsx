import './header.scss';
import Logo from './Logo.js';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-logo text-center" >
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;