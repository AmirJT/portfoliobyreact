import React from "react";

const Resume = () => {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>Resume</h2>
      <a href="/path/to/resume.pdf" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
};

export default Resume;
