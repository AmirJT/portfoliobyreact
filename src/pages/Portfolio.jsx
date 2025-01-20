import React from "react";

const Portfolio = () => {
  // Section styles for full-page layout
  const sectionStyles = {
    height: "800px", // Full viewport height
    width: "1000px", // Full viewport width
    padding: "4rem 2rem",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const headingStyles = {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "2rem",
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Larger minimum size for cards
    gap: "2rem",
    width: "100%", // Ensures grid spans full width
    maxWidth: "1200px", // Restrict max width for better layout
  };

  const itemStyles = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#f9f9f9", 
  };

  const linkStyles = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    display: "block",
    marginTop: "0.5rem",
  };

  const projects = [
    { title: "Client Website", link: "https://amirjt.github.io/Taha-website/", repo: "https://github.com/AmirJT/Taha-website" },
    { title: "Github Scroller", link: "fancy-stroopwafel-025391.netlify.app", repo: "https://github.com/AmirJT/canidatescroller" },
    { title: "Project 3", link: "#", repo: "#" },
    { title: "Project 4", link: "#", repo: "#" },
    { title: "Project 5", link: "#", repo: "#" },
    { title: "Project 6", link: "#", repo: "#" },
  ];

  return (
    <section style={sectionStyles} id="portfolio">
      <h2 style={headingStyles}>Portfolio</h2>
      <div style={gridStyles}>
        {projects.map((project, index) => (
          <div key={index} style={itemStyles}>
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={linkStyles}>
              View Live
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" style={linkStyles}>
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
