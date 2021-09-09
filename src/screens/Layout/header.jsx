import "./header.scss";
import Logo from "./Logo.js";

const Header = () => {
  return (
    <header className="bg-light mb-5">
      <div className="container">
        <div className="header-logo text-center">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
