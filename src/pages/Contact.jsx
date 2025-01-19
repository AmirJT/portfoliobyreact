import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
