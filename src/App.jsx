import { useState, useEffect } from "react";
import "@fontsource/exo-2";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import backgroundImage from "./assets/background.jpg";
const App = () => {
  const [redirectUrlState, setRedirectUrlState] = useState(null);
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
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
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
        </div>
      </div>
      <footer className="footer">
        Developed & Maintained by the Internet Solutions Group, IIM Calcutta
      </footer>
    </div>
  );
};

export default App;
