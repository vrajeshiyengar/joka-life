import React from "react";
import AppCard from "../components/AppCard";
import config from "../config";
import iimcLogo from "../assets/iimc_logo.png";
const LandingPage = ({ setRedirectUrl }) => {
  const handleClick = (url, requiresJokaAuth) => {
    console.log("clicked!!", url, requiresJokaAuth);
    if (requiresJokaAuth) {
      setRedirectUrl(url);
    } else {
      window.location.assign(url);
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="landing-logo-container">
          <img src={iimcLogo} alt="IIM Calcutta" className="landing-logo" />
        </div>
        <h1 className="landingpage_title">Welcome to Joka Life</h1>
        <p className="landingpage_description">IIM Calcutta's digital portal</p>
        <br />
        <p className="landingpage_description">
          Select an application below to continue
        </p>
        <div className="appcards_container">
          {config.applications.map((item) => {
            return (
              <AppCard
                key={`key_${item.title}`}
                title={item.title}
                description={item.description}
                redirectUrl={item.redirectUrl}
                onClick={() => {
                  handleClick(item.redirectUrl, item.requiresJokaAuth);
                }}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
