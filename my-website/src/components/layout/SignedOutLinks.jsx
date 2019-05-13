import React from "react";

import { NavLink } from "react-router-dom";

const Signedoutlinks = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item p-3">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink to="/">Career</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink to="/">Photography</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink to="/">Blog</NavLink>
      </li>
    </ul>
  );
};

export default Signedoutlinks;
