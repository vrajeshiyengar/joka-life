import React from "react";
import cardBg from "../assets/card-bg-white.png";

const AppCard = ({ title, onClick, disabled }) => {
  return (
    <div
      onClick={disabled ? () => {} : onClick}
      className={`appcard-card${disabled ? "-disabled" : ""}`}
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      <span className="card-title">{title}</span>
      {disabled ? <span className="coming-soon">Coming soon...</span> : <></>}
    </div>
  );
};

export default AppCard;
