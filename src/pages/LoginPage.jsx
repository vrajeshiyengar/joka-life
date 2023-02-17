import React, { useState } from "react";

const LoginPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const [redirectUrl, setRedirectUrl] = useState(
    searchParams.get("redirectUrl")
  );

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Form submitted!!", event);
  };
  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("Forgot Password!!", event);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
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
