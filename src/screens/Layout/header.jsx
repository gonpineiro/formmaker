import "./header.scss";
import LogoNeg from "./LogoNeg.js";

const Header = () => {
  return (
    <header className="mb-5">
      <div className="container">
        <div className="header-logo text-center">
          <LogoNeg />
        </div>
      </div>
    </header>
  );
};

export default Header;
