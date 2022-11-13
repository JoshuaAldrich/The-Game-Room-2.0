import React from "react";
import { Link } from "react-router-dom";


const Nav = ({ user }) => {
  return (

    <header className="bg-dark text-white py-2 flex-row align-center ">
      <div className=" container d-flex justify-content-around ">
        <Link to="/">
          <h1>Game Room</h1>
        </Link>
        <div className="d-flex justify-content-center align-items-center px-2">
          <ul>
            <Link to="/login"
              className="px-2">Login
            </Link>
            <Link to="/HoL"
              className="px-2">High Or Low
            </Link>

          </ul>

        </div>


      </div>

    </header>
  )
};

export default Nav;
