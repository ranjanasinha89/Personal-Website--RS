import React from "react";

import { NavLink } from "react-router-dom";

const Signedinlinks = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item p-3">
        <NavLink to="/">Edit Blogs</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink to="/">Edit Photographs</NavLink>
      </li>
      <li className="nav-item p-3">
        <NavLink to="/">Logout</NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink to="/" className="btn btn-primary">
          RS
        </NavLink>
      </li>
    </ul>
  );
};

export default Signedinlinks;
