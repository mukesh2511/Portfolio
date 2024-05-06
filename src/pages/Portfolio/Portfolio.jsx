import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectData } from "../../../public/data";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    if (active === "All") {
      setData([...projectData]);
    } else {
      const filteredData = projectData.filter((data) =>
        data.type.some((type) => type === active)
      );
      setData(filteredData);
    }
  }, [active, projectData]);

  const handleItemClick = (value) => {
    setActive(value);
  };

  return (
    <div className="portfolio">
      <div className="container">
        <div className="heading">
          <h2>Project</h2>
          <span></span>
        </div>
        <div className="bar">
          <p
            className={active === "All" && "active"}
            onClick={() => handleItemClick("All")}
          >
            All
          </p>
          <p
            className={active === "TAILWIND" && "active"}
            onClick={() => handleItemClick("TAILWIND")}
          >
            Tailwind
          </p>
          <p
            className={active === "JAVASCRIPT" && "active"}
            onClick={() => handleItemClick("JAVASCRIPT")}
          >
            Javascript
          </p>
          <p
            className={active === "REACT" && "active"}
            onClick={() => handleItemClick("REACT")}
          >
            React JS
          </p>
          <p
            className={active === "NODE" && "active"}
            onClick={() => handleItemClick("NODE")}
          >
            Node JS
          </p>
          <p
            className={active === "NEXT" && "active"}
            onClick={() => handleItemClick("NEXT")}
          >
            Next JS
          </p>
        </div>
        <div className="cards">
          <AnimatePresence>
            {data.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
              >
                <ProjectCard data={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
