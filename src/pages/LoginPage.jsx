import { useEffect } from "react";
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

const LoginPage = ({ redirectUrl }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    debugger;
    postData(
      "https://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/auth/login", // this wasn't working a while back, need to check
      { username: event.target[0].value, password: event.target[1].value },
      {},
      (res) => {
        debugger;
        console.log(res); // store joka_auth_token in localStorage here
        window.location.replace(redirectUrl);
      }
    );
  };
  const verifyAuthToken = (token) => {
    if (token) {
      postData(
        "https://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/auth/verifyAccessToken", // this wasn't working a while back, need to check
        { access_token: token },
        { joka_auth_token: token },
        (res) => {
          debugger;
          console.log(res);
          // if (!res.body.error) {  // redirect to redirectUrl if token is valid
          //   window.location.replace(redirectUrl);
          // } else {
          //   do nothing
          // }
        }
      );
    }
  };
  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("Forgot Password!!", event); // redirect to forgot password app built by nabaneet
  };

  useEffect(() => {
    verifyAuthToken(localStorage.getItem("joka_auth_token"));
  }, []);

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
