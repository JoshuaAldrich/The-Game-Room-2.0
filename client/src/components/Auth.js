import React, { useState } from "react";
import axios from "axios";
import { async } from "q";

export default function ({ setUser }) {
  let [authMode, setAuthMode] = useState("signin");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form
          className="Auth-form"
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await axios.post(
              "http://localhost:3001/api/users/login",
              {
                email,
                password,
              }
            );
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user);
          }}
        >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="/#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form
        className="Auth-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await axios.post(
            "http://localhost:3001/api/users/signup",
            {
              name,
              email,
              password,
            }
          );
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          setUser(res.data.user);
        }}
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="/#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

//when a user logs out remove the token from local storage
