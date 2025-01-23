git add .
import React from "react";
import Navigation from "./Navigation";

const Header = () => (
  <header style={{ position: "sticky", top: 0, backgroundColor: "#212121", color: "white", zIndex: 1000 }}>
    <div className="container">
      <h1 className="site-title">Amir Jafari</h1>
      <Navigation />
    </div>
  </header>
);

export default Header;
