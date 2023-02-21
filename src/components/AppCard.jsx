import React from "react";

const AppCard = ({ title, bg, onClick, disabled }) => {
  return (
    <div
      onClick={disabled ? () => {} : onClick}
      className={`appcard-card${disabled ? "-disabled" : ""}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <span className="card-title">{title}</span>
      {disabled ? <span className="coming-soon">Coming soon...</span> : <></>}
    </div>
  );
};

export default AppCard;
