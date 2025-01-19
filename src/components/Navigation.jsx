import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Resume
      </NavLink>
    </nav>
  );
};

export default Navigation;
