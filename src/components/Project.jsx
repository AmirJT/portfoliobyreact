import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: "/path/to/image1.jpg",
      link: "https://project1.com",
      repo: "https://github.com/project1",
    },
    {
      title: "Project 2",
      image: "/path/to/image2.jpg",
      link: "https://project2.com",
      repo: "https://github.com/project2",
    },
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Portfolio</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
