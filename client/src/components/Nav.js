import React from "react";
import { Link } from "react-router-dom";
import auth from "../Utils/auth";


const Nav = ({ user }) => {
  return (

    <header className="header  text-white py-2 flex-row align-center ">
      <div className=" container d-flex justify-content-around ">
        <Link to="/">
          <h1 className="navGR text-decoration-none">Game Room</h1>
        </Link>
        <div className="d-flex justify-content-center align-items-center px-2">
          {auth.loggedIn() ? (
            <>

              <ul>
                <p className=" font color-white"> You are logged in!</p>

                <Link to="/HoL"
                  className="px-2">High Or Low
                </Link>

              </ul>




            </>

          ) : (

            <ul>
              <Link to="/login"
                className="navLogin px-2">Login
              </Link>
              <Link to="/signup"
                className="navSignup px-2">Sign Up
              </Link>
              <Link to="/RPS"
                className="navSignup px-2">RPS
              </Link>
              <Link to="/HoL"
                className="navSignup px-2">HoL
              </Link>
              <Link to="/HoT"
                className="navSignup px-2">HoT
              </Link>

            </ul>
          )}

        </div>


      </div>

    </header>
  )
};

export default Nav;
