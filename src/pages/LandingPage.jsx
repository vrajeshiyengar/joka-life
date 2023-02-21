import React from "react";
import AppCard from "../components/AppCard";
import { applications } from "../config";
import iimcLogoWhite from "../assets/iimc_logo_white.png";

const LandingPage = ({ setRedirectUrl }) => {
  const handleClick = (url, requiresJokaAuth) => {
    console.log("clicked!!", url, requiresJokaAuth);
    if (requiresJokaAuth) {
      setRedirectUrl(url);
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <div className="banner">
        <div className="banner-logo-container">
          <img src={iimcLogoWhite} alt="IIM Calcutta" className="banner-logo" />
        </div>
        <div className="text-container">
          <span className="title">Joka Life</span>
          <span className="subtitle">IIM Calcutta's digital portal</span>
        </div>
      </div>
      <span className="section-header">Applications</span>
      <div className="cards-container">
        {applications.cards.map((item) => {
          return (
            <AppCard
              key={`key_${item.title}`}
              title={item.title}
              redirectUrl={item.redirectUrl}
              onClick={() => {
                handleClick(item.redirectUrl, item.requiresJokaAuth);
              }}
              bg={item.bg}
              fontColor={item.fontColor}
              disabled={item.redirectUrl ? false : true}
            />
          );
        })}
      </div>
      <span className="section-header">Utilities</span>
      <div className="section-cards-container">
        {applications.utils.map((item) => {
          return (
            <AppCard
              key={`key_${item.title}`}
              variant="card"
              title={item.title}
              redirectUrl={item.redirectUrl}
              onClick={() => {
                handleClick(item.redirectUrl, item.requiresJokaAuth);
              }}
              bg={item.bg}
              fontColor={item.fontColor}
              disabled={item.redirectUrl ? false : true}
            />
          );
        })}
      </div>
    </>
  );
};

export default LandingPage;
