import React from "react";

const Footer = () => {
  const footerStyles = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    width: "100%",
    position: "relative",
    bottom: 0,
  };

  const linkStyles = {
    color: "#007bff",
    margin: "0 1rem",
    textDecoration: "none",
  };

  return (
    <footer style={footerStyles}>
      <p>Connect with me:</p>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
        GitHub
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
        Instagram
      </a>
      <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
        Spotify
      </a>
      <p>&copy; {new Date().getFullYear()} Amir Jafari. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
