import React from "react";
const AppCard = ({ title, bg, fontColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="appcard_card"
      style={{ backgroundImage: `url(${bg})`, color: fontColor }}
    >
      <span className="card-title">{title}</span>
    </div>
  );
};

export default AppCard;
