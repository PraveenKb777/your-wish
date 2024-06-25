import React from "react";
import Button from "../Button/Button";

const ContactUsForm = () => {
  return (
    <div
      className="border border-[#eeeeee1a] rounded-lg p-5"
      style={{
        background:
          "linear-gradient(129deg, rgb(31, 31, 31) 0%, rgb(16, 16, 16) 132.836%)",
      }}
    >
      <input
        className="contact-us_input contact-us_input-additional"
        placeholder="Your Name"
      />
      <input
        className="contact-us_input contact-us_input-additional"
        placeholder="Your Email"
      />
      <input
        className="contact-us_input contact-us_input-additional"
        placeholder="Your Phone (India only)"
        type="text"
        maxLength={10}
      />
      <textarea
        className="contact-us_input contact-us_input-additional min-h-60"
        placeholder="Describe your request"
      />
      <Button label="Send Message" />
    </div>
  );
};

export default ContactUsForm;
