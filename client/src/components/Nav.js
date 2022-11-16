import React from "react";
import { Link } from "react-router-dom";
import auth from "../Utils/auth";

const Nav = () => {
  return (
    <header className="bg-dark text-white py-2 flex-row align-center ">
      <div className=" container d-flex justify-content-around ">
        <Link to="/">
          <h1>Game Room</h1>
        </Link>
        <div className="d-flex justify-content-center align-items-center px-2">
          {auth.loggedIn() ? (
            <>
              <ul>
                <p>YOU ARE LOGGED IN!</p>
                <Link to="/HoL" className="px-2">
                  High or Low
                </Link>
              </ul>
            </>
          ) : (
            <ul>
              <Link to="/login" className="px-2">
                Login
              </Link>
              <Link to="/signup" className="px-2">
                Sign Up
              </Link>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
export default Nav;
