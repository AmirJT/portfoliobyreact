import React from "react";

const About = () => {
  const sectionStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "800px", 
    width: "1000px", 
    backgroundColor: "#f5f5f5", 
    padding: "2rem",
    textAlign: "center",
  };

  const photoStyles = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    marginBottom: "1.5rem",
  };

  const detailsStyles = {
    maxWidth: "800px", 
    marginTop: "1rem",
  };

  const headingStyles = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#333",
  };

  const textStyles = {
    fontSize: "1.2rem",
    color: "#555",
    lineHeight: "1.8",
  };

  return (
    <section style={sectionStyles} id="about">
      <img
        src="/IMG_0234.jpeg" 
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
