import React, { useEffect, useState } from "react";
import { LuHome } from "react-icons/lu";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname === "/");

  const [Active, setActive] = useState(false);
  const [path, setPath] = useState("");

  const isActive = () => {
    if (pathname === "/") {
      setPath(pathname);
      window.scrollY > 0 ? setActive(true) : setActive(false);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, [pathname]);

  return (
    <div className={Active && pathname === "/" ? "navbar active" : "navbar"}>
      <div className="nav">
        <div className="left">
          <Link
            to={"/"}
            className={Active || pathname !== "/" ? "home active" : "home"}
          >
            <LuHome className="homeIcon" stroke="Black" size={"40px"} />
          </Link>
          <div className="links">
            <Link
              to={"/resume"}
              className={
                pathname !== "/resume"
                  ? Active
                    ? "link active"
                    : "link"
                  : "link color"
              }
            >
              Resume
            </Link>
            <Link
              to={"/portfolio"}
              className={
                pathname !== "/portfolio"
                  ? Active
                    ? "link active"
                    : "link"
                  : "link color"
              }
            >
              Portfolio
            </Link>
            <Link
              to={"/contact"}
              className={
                pathname !== "/contact"
                  ? Active
                    ? "link active"
                    : "link"
                  : "link color"
              }
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="right">
          <AiFillFacebook
            size={"20px"}
            className={Active ? "active" : ""}
            style={{ fill: Active ? "#ffffff" : "#213547" }}
          />
          <FaSquareInstagram
            size={"20px"}
            style={{ fill: Active ? "#ffffff" : "#213547" }}
          />
          <FaTwitter
            size={"20px"}
            className={Active ? "active" : ""}
            style={{ fill: Active ? "#ffffff" : "#213547" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
