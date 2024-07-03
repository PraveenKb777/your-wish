'use client'
import React, { useState } from "react";
import Button from "../Button/Button";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ywlh.pkbmg.shop/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      alert("Error submitting form");
    }
  };
  return (
    <div
      className="border border-[#eeeeee1a] rounded-lg p-5"
      style={{
        background:
          "linear-gradient(129deg, rgb(31, 31, 31) 0%, rgb(16, 16, 16) 132.836%)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          className="contact-us_input contact-us_input-additional"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          className="contact-us_input contact-us_input-additional"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          className="contact-us_input contact-us_input-additional"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone (India only)"
          maxLength={10}
          required
        />
        <textarea
          className="contact-us_input contact-us_input-additional min-h-60"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your request"
          required
        />
        <Button label="Send Message" />
      </form>
    </div>
  );
};

export default ContactUsForm;
