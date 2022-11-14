import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer-logo">
        RYAN TRAFICANTE
      </a>

      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-copyright">
        <small>&copy; Ryan Traficante. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
