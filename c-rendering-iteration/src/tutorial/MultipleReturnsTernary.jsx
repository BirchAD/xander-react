import React, { useState } from "react";

const TernaryOperator = () => {
  const [isLoggedin, setIsLoggeIn] = useState(false);

  return (
    <div className="container centered">
      {isLoggedin ? (
        <>
          <h2>You are logged in!</h2>
          <button
            className="btn"
            type="button"
            onClick={() => setIsLoggeIn(false)}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <form className="form">
            <h3>Login</h3>
            <div className="form-row">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="text" className="form-input" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-input" id="password" />
            </div>
            <button
              type="submit"
              className="btn btn-block"
              onClick={() => setIsLoggeIn(true)}
            >
              login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default TernaryOperator;
