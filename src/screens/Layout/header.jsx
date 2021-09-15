import { Link } from "react-router-dom";

import "./header.scss";
import LogoNeg from "./LogoNeg.js";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-logo text-center">
          <Link
            className="menu-link col-12 text-center"
            to={"/apps/formmaker/"}
          >
            <LogoNeg />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
