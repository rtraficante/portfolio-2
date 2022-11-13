import React from "react";
import "./about.css";
import ryan from "../../assets/ryan.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ryan} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Years Experience</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>10 Projects</small>
            </article>
          </div>
          <p>
            After 3 years of working in ecommerce management, I slowly began to
            develop a love for software engineering and web development. I began
            teaching myself Python to develop programs I would want to use in my
            daily life. After struggling to find direction, I decided to pursue
            further education in Computer Science by taking my first CS course
            (CS50 - Harvard). After completing the course, I was still yearning
            for more. I then decided to enroll in the FullStack Web Development
            Immersive Program. At Fullstack, I learned how to develop
            interactive web applications from the ground-up using Node.js,
            Express, PostgreSQL, Sequelize, React, Redux, and many other
            technologies. I am looking forward to providing value to the world
            and using my skills to build applications that solve meaningful and
            challenging problems.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
