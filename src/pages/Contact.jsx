import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

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
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: 2,
              padding: "10px 20px",
              backgroundColor: "#007bff",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
            }}
          >
            Send
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
