import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ws09sba",
        "template_fih1o2l",
        form.current,
        "lbewxd5mdYa4jHr4I"
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
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>rtraficante22@gmail.com</h5>
            <a href="mailto:rtraficante22@gmail.com">Send an Email</a>
          </article>
          <article className="contact-option">
            <AiOutlinePhone className="contact-option-icon" />
            <h4>Phone</h4>
            <h5>1 (516) 413-6184</h5>
            <a href="tel:516-413-6184">Call</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
