import React, { useState } from "react";
import applications from "../applications";
import AppCard from "../components/AppCard";

const LandingPage = ({ setRedirectUrl }) => {
  const searchParams = new URLSearchParams(window.location.search);

  const handleClick = (url, requiresJokaAuth) => {
    console.log("clicked!!", url, requiresJokaAuth);
    if (requiresJokaAuth) {
      setRedirectUrl(url);
    } else {
      window.location.replace(url);
    }
  };
  console.log(applications);
  return (
    <div className="container">
      <div className="card">
        <h2>Welcome to Joka Life</h2>
        <h3>IIM Calcutta's digital portal</h3>
        <div className="appcards_container">
          {applications.map((item) => {
            return (
              <AppCard
                title={item.title}
                description={item.description}
                redirectUrl={item.redirectUrl}
                onClick={() => {
                  handleClick(item.redirectUrl, item.jokaAuth);
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
