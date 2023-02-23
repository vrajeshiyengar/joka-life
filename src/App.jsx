import { useState, useEffect } from "react";
import "@fontsource/exo-2";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import bg1 from "./assets/backgrounds/bg1.jpg";
import bg2 from "./assets/backgrounds/bg2.jpg";
import bg3 from "./assets/backgrounds/bg3.jpg";
import bg4 from "./assets/backgrounds/bg4.jpg";
import bg5 from "./assets/backgrounds/bg5.jpg";
import bg6 from "./assets/backgrounds/bg6.jpg";
import bg7 from "./assets/backgrounds/bg7.jpg";
import bg8 from "./assets/backgrounds/bg8.jpg";
import bg9 from "./assets/backgrounds/bg9.jpg";
import bg10 from "./assets/backgrounds/bg10.jpg";
import bg11 from "./assets/backgrounds/bg11.jpg";
import bg12 from "./assets/backgrounds/bg12.jpg";
import bg13 from "./assets/backgrounds/bg13.jpg";
import bg14 from "./assets/backgrounds/bg14.jpg";

import { socials } from "./config";
import iimcIcon from "./assets/social/iimc.png";
import linkedinIcon from "./assets/social/linkedin.png";
import instagramIcon from "./assets/social/instagram.png";
import facebookIcon from "./assets/social/facebook.png";
import twitterIcon from "./assets/social/twitter.png";
import youtubeIcon from "./assets/social/youtube.png";
const socialIcons = [
  { alt: "iimc", src: iimcIcon },
  { alt: "linkedin", src: linkedinIcon },
  { alt: "instagram", src: instagramIcon },
  { alt: "facebook", src: facebookIcon },
  { alt: "twitter", src: twitterIcon },
  { alt: "youtube", src: youtubeIcon },
];
const backgroundImage = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  bg11,
  bg12,
  bg13,
  bg14,
][Math.floor(Math.random() * 14)];

const App = () => {
  const [redirectUrlState, setRedirectUrlState] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectUrl");

    if (redirectUrl) {
      console.log(`The value of redirectUrl is ${redirectUrl}.`);
      urlParams.delete("redirectUrl");
      const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
      window.history.replaceState(null, "", newUrl);
      setRedirectUrlState(redirectUrl);
    }
    const onPageLoad = () => {
      setLoading(false);
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  const redirectTo = (ev) => {
    window.open(socials[ev.target.alt], "_blank");
  };
  if (loading) {
    <></>;
  } else {
    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay">
          <div className="view-space">
            {redirectUrlState ? (
              <LoginPage
                redirectUrl={redirectUrlState}
                setRedirectUrl={setRedirectUrlState}
              />
            ) : (
              <LandingPage setRedirectUrl={setRedirectUrlState} />
            )}
            <footer className="footer">
              <span>
                {`Developed by Vrajesh Iyengar. \n© Copyright 2023 Internet Solutions Group`}
              </span>
              <div className="socials">
                {socialIcons.map((icon) => (
                  <div key={`social_icon_${icon.alt}`}>
                    <img src={icon.src} alt={icon.alt} onClick={redirectTo} />
                  </div>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
