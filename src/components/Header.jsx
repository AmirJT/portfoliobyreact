import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#333", color: "white", padding: "1rem", textAlign: "center" }}>
      <h1>Amir J Tehrani</h1>
      <Navigation />
    </header>
  );
};

export default Header;
