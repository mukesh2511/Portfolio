import React from "react";
import "./SideBar.scss";
import { GiSpectacleLenses } from "react-icons/gi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const SIdeBar = () => {
  return (
    <div className="sideBar_Container">
      <div className="container">
        <p className="name">Mukesh Mourya</p>
        <p className="desc">MERN Stack Developer</p>
      </div>
      <motion.div
        className="image"
        initial={{ width: "100vw", y: "-120vh", height: "100vh" }}
        animate={{ width: "auto", y: "0px", height: "auto" }}
        transition={{ duration: 2 }}
      >
        <motion.img
          // initial={{ objectFit: "contain" }}
          // animate={{ objectFit: "cover", height: "350px" }}
          // transition={{ duration: 2, delay: 0.5 }}/
          style={{ height: "350px" }}
          src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1713208205~exp=1713211805~hmac=a682653fb08331eabf01814b70492a0ed91e18384a48f8f4b8bc4715f63b4ff6&w=1060"
          alt="img"
        />
      </motion.div>
      <div className="details">
        <div className="container">
          <div className="first">
            <GiSpectacleLenses className="icon" />
          </div>
          <div className="second">
            <span className="span"></span>

            <span className="title">Name : Mukesh Mourya</span>
          </div>
          <div className="second">
            <span className="span"></span>
            <span className="title">Birthday : 25 November 2003</span>
          </div>
          <div className="second">
            <span className="span"></span>

            <span className="title">Job : Software Developer</span>
          </div>
          <div className="second">
            <span className="span"></span>

            <span className="title">Email : mouryamukesh8692@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="btn">
        <button>
          <IoCloudDownloadOutline stroke="#FFB800" size={"1.5em"} /> Download CV
        </button>
      </div>
    </div>
  );
};

export default SIdeBar;
