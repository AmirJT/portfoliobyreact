import React from "react";

const About = () => {
  const sectionStyles = {
    height: "800pxh", 
    width: "1000px", 
    padding: "4rem 2rem",
    backgroundColor: "#e9f5ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const photoStyles = {
    width: "300px",
    height: "350px",
    borderRadius: "35%",
    marginBottom: "2rem",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  };

  const detailsStyles = {
    maxWidth: "800px",
    lineHeight: "1.8",
    color: "#333",
  };

  const headingStyles = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#007bff",
  };

  const textStyles = {
    fontSize: "1.2rem",
    color: "#555", 
  };

  return (
    <section style={sectionStyles} id="about">
      <img
        src="./src/assets/IMG_0234.jpeg"
        alt="Amir Jafari"
        style={photoStyles}
      />
      <div style={detailsStyles}>
        <h2 style={headingStyles}>About Me</h2>
        <p style={textStyles}>
          Hello! My name is Amir Jafari, and I am a passionate web developer
          with a strong focus on creating modern, user-friendly, and visually
          engaging websites. I specialize in full-stack development, with
          expertise in React, JavaScript, and modern web technologies. My
          journey into coding has been fueled by a love for problem-solving and
          turning creative ideas into functional digital experiences. Let's
          create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
