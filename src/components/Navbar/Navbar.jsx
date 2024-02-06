import React from "react";
import { LuHome } from "react-icons/lu";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="left">
          <div className="home">
            <LuHome className="homeIcon" />
          </div>
          <div className="links">
            <span>Resume</span>
            <span>Portfolio</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="right">
          <AiFillFacebook />
          <FaSquareInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
