/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const selectNavItem = (e) => {
    const href = e.currentTarget.getAttribute("href");
    setActiveNav(href);
  };

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={selectNavItem}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={selectNavItem}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={selectNavItem}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={selectNavItem}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        onClick={selectNavItem}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
