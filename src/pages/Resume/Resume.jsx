import React from "react";
import "./Resume.scss";
import { VscFileSubmodule } from "react-icons/vsc";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="resume">
      <div className="container">
        <div className="heading">
          <h2>Experience</h2>
          <span></span>
        </div>
        <div className="wrapper">
          <div className="first">
            <motion.div
              className="div"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <VscFileSubmodule size={"48px"} style={{ color: "#000000" }} />
            </motion.div>
            <h2>Working History</h2>
          </div>
          <motion.div
            className="second"
            initial={{ x: "950px" }}
            animate={{ x: "0" }}
            transition={{ duration: 1 }}
          >
            <p className="position">
              Software Developer Intern - IRIQUE HITECH
            </p>
            <p className="time">2024 - Present</p>
            <p className="desc">
              Expenses as material breeding insisted building to in. Continual
              so distrusts pronounce by unwilling listening. Thing do taste on
              we manor.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
