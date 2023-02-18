import { useState, useEffect } from "react";
const postData = async (url, body = {}, headers = {}, cb = () => {}) => {
  fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((response) => {
      cb(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

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
      fetch(
        `http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      )
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
            window.location.replace(redirectUrl);
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

  const verifyAuthToken = (token) => {
    if (token && token != "null") {
      const formData = new URLSearchParams();
      formData.append("access_token", token);
      fetch(
        `http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/auth/verifyAccessToken`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            joka_auth_token: token,
          },
          body: formData.toString(),
        }
      )
        .then((response) => response.json())
        .then((body) => {
          if (body.error) {
            console.log("Cleared local joka_auth_token!!!");
            localStorage.removeItem("joka_auth_token");
          } else {
            localStorage.removeItem("joka_auth_token");

            // window.location.replace(redirectUrl);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    window.location.replace(
      "http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/passwordResetApp#/"
    );
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    setRedirectUrl(null);
  };

  useEffect(() => {
    verifyAuthToken(localStorage.getItem("joka_auth_token"));
  }, []);

  return (
    <div className="container">
      <div className="login_card">
        <div className="login_title">
          <h2>Login</h2>
          <a onClick={handleHomeClick}>Home</a>
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
          <a onClick={handleForgotPassword}>Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
