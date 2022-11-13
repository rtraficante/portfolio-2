import React from "react";
import "./header.css";
import CTA from "./CTA";
import Ryan from "../../assets/ryan.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Ryan Traficante</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Ryan} alt="" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
