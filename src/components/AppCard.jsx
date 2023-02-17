import React from "react";
const AppCard = ({ title, description, onClick, icon }) => {
  return (
    <div onClick={onClick} className="appcard_card">
      <img src={icon} alt="Logo" className="appcard_logo" />
      <div className="appcard_content">
        <h3 className="appcard_title">{title}</h3>
        <p className="appcard_description">{description}</p>
      </div>
    </div>
  );
};

export default AppCard;
