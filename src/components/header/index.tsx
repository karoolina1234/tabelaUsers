import React from "react";

//svg icons
import LogoIcon from "../../assets/logo";

const Header = () => {
  return (
    <nav className="navbar navbar-header">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <LogoIcon />
        </span>
      </div>
    </nav>
  );
};

export default Header;
