import React from "react";

import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="container">
        <img src={"/code.png"} alt="" />

        <p className="title">{data.type}</p>
        <p className="desc">{data.inst}</p>
        <p className="per">{data.percent}</p>
      </div>
    </div>
  );
};

export default Card;
