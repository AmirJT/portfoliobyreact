import React from "react";
import { Box, Typography, Button, Container, List, ListItem, ListItemText } from "@mui/material";

const Resume = () => {
  const proficiencies = ["React", "JavaScript", "HTML/CSS", "Node.js", "MongoDB"];

  return (
    <Box
      sx={{
        height: "800px", 
        width: "1000px", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e9f5ff", 
        padding: 2,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", 
          padding: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 3, color: "#333" }}>
          Resume
        </Typography>
        <Button
          variant="contained"
          href="/path/to/resume.pdf"
          download
          sx={{
            marginBottom: 3,
            padding: "10px 20px",
            backgroundColor: "#007bff",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Download Resume
        </Button>
        <Typography variant="h5" sx={{ marginBottom: 2, color: "#333" }}>
          Proficiencies
        </Typography>
        <List>
          {proficiencies.map((skill, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText
                primary={skill}
                sx={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  color: "#555",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Resume;
