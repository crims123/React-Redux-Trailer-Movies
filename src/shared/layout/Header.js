import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <Link className="header__link" to="/page/1">
      <header className="header">Developed by Cristian David Pinto</header>
    </Link>
  );
};

export default Header;
