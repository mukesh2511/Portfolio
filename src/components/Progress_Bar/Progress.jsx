import React from "react";
import "./Progress.scss";

const Progress = ({ data }) => {
  console.log(data);
  return (
    <div className="progress">
      <p>{data.name}</p>
      <div>
        <div className="skill html" style={{ width: data.percent }}>
          {data.percent}
        </div>
      </div>
    </div>
  );
};

export default Progress;
