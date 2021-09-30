import React from "react";
import "./style.scss";

const PrettyProgress = ({ width, color }) => {
  return (
    <div className="progress-bar__container">
      <div
        className="progress-bar__container--filled"
        style={{ width: `${width}%`, background: `${color}` }}
      ></div>
    </div>
  );
};

export default PrettyProgress;
