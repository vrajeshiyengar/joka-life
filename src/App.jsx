import { useState, useEffect } from "react";

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
      {redirectUrlState ? (
        <LoginPage
          redirectUrl={redirectUrlState}
          setRedirectUrl={setRedirectUrlState}
        />
      ) : (
        <LandingPage setRedirectUrl={setRedirectUrlState} />
      )}
    </div>
  );
};

export default App;
