import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "1rem" }}>
      <p>Connect with me:</p>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "1rem" }}>GitHub</a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "1rem" }}>Instagram</a>
      <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Spotify</a>
    </footer>
  );
};

export default Footer;
