import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const linkStyles = {
    color: "white",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  };

  const activeLinkStyles = {
    backgroundColor: "#007bff",
    transform: "scale(1.1)",
  };

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "1rem 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {["About", "Portfolio", "Contact", "Resume"].map((link, index) => (
        <NavLink
          key={index}
          to={`/${link.toLowerCase()}`}
          className={({ isActive }) => (isActive ? "active-link" : undefined)} 
          style={({ isActive }) =>
            isActive ? { ...linkStyles, ...activeLinkStyles } : linkStyles
          }
        >
          {link}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
