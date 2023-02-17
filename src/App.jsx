import { useState, useEffect } from "react";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import backgroundImage from "./assets/background.jpg";
const App = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const [redirectUrl, setRedirectUrl] = useState(
    searchParams.get("redirectUrl")
  );

  // const [jokaAuthToken, setJokaAuthToken] = useState(
  //   localStorage.getItem("joka_auth_token")
  // );
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {redirectUrl ? (
        <LoginPage redirectUrl={redirectUrl} />
      ) : (
        <LandingPage setRedirectUrl={setRedirectUrl} />
      )}
    </div>
  );
};

export default App;
