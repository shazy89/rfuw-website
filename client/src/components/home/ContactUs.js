import React from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_imzzgjs",
        e.target,
        "user_sAXhNUbnzRYlHNQBla6J0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />

      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
