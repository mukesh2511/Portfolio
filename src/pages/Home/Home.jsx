import React, { useRef, useState } from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Progress from "../../components/Progress_Bar/Progress";
import { education, progressBardata } from "../../../public/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [progress, setProgress] = useState(progressBardata);
  const educationRef = useRef();
  const { ref: educationInViewRef, inView: isEducationInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="home">
      <div className="container">
        <div className="wrapper">
          <div className="intro">
            <h2>About Me</h2>
            <p>
              👋 Hey there! I'm Mukesh Mourya, a passionate student deeply
              immersed in web development. With a knack for problem-solving and
              a love for crafting beautiful digital experiences, I'm constantly
              exploring new technologies and pushing the boundaries of what's
              possible on the web. Currently interning, I'm gaining invaluable
              real-world experience while honing my skills and preparing for the
              exciting journey ahead. Let's connect and create something amazing
              together!
            </p>
            <span></span>
          </div>

          <div className="skills">
            <div className="wrap">
              <h2>Skills</h2>
              <span></span>

              <div className="left">
                {progress.map((prog, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -50 : 50,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Progress data={prog} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="services" ref={educationInViewRef}>
            <h2>Education</h2>
            <span></span>

            <div className="section">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: "0" }}
                  animate={isEducationInView ? { opacity: 1 } : {}}
                  transition={{ delay: "0.5" }}
                >
                  <Card data={edu} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
