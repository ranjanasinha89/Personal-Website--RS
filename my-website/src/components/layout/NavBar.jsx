import React from "react";
import { Link } from "react-router-dom";
import Signedinlinks from "./SignedInLinks";
import Signedoutlinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          RS
        </Link>
        <Signedoutlinks />
        <Signedinlinks />
      </div>
    </nav>
  );
};

export default Navbar;
