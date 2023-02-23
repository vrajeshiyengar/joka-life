import { useState, useEffect } from "react";
import { apis } from "../config";
import iimcLogo from "../assets/iimc_logo.png";

const LoginPage = ({ redirectUrl, setRedirectUrl }) => {
  const [errorText, setErrorText] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    if (event.target[0].value && !event.target[1].value) {
      setErrorText("Please enter a password");
    } else if (!event.target[0].value && event.target[1].value) {
      setErrorText("Please enter a username");
    } else if (!event.target[0].value && !event.target[1].value) {
      setErrorText("Please enter a username and password");
    } else {
      setErrorText("");
      const formData = new URLSearchParams();
      formData.append("username", event.target[0].value);
      formData.append("password", event.target[1].value);
      fetch(apis.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      })
        .then((response) => {
          if (response.ok) {
            return JSON.parse(response.headers.get("joka_auth_token"));
          } else {
            const err = "Invalid username or password";
            setErrorText(err);
            return { error: err };
          }
        })
        .then((joka_auth_token) => {
          if (
            !joka_auth_token.error &&
            joka_auth_token &&
            joka_auth_token.access_token
          ) {
            localStorage.setItem(
              "joka_auth_token",
              joka_auth_token.access_token
            );
            window.open(redirectUrl);
          }
        })
        .catch((err) => {
          console.error(err);
          setErrorText(
            "Unexpected error. Kindly refresh the page or contact the ISG team if the issue persists."
          );
        });
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    window.open(apis.forgotPassword, "_blank");
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    setRedirectUrl(null);
  };

  useEffect(() => {
    const verifyAuthToken = () => {
      const token = localStorage.getItem("joka_auth_token");
      if (token && token !== "null") {
        const formData = new URLSearchParams();
        formData.append("access_token", token);
        fetch(apis.verifyAccessToken, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            joka_auth_token: token,
          },
          body: formData.toString(),
        })
          .then((response) => response.json())
          .then((body) => {
            if (body.error) {
              console.log("Cleared local joka_auth_token!!!");
              localStorage.removeItem("joka_auth_token");
            } else {
              window.open(redirectUrl, "_blank");
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
    verifyAuthToken();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-container">
          <img src={iimcLogo} alt="IIM Calcutta" className="login-logo" />
        </div>
        <div className="login-title">
          <h2>Login</h2>
          <span className="link" onClick={handleHomeClick}>
            Home
          </span>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <div className="error">{errorText}</div>
          <button type="submit">Submit</button>
        </form>
        <div className="forgot-password">
          <span className="link" onClick={handleForgotPassword}>
            Forgot password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
