import { Link } from "react-router-dom";
import classes from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Link className={classes.link} to="/">
        The Game Room
      </Link>
      <Link className={classes.link} to="/login">
        Login
      </Link>
      <Link className={classes.link} to="/RPS">
        Rock Paper Scissors
      </Link>
      <Link className={classes.link} to="/HoL">
        High or Low
      </Link>
      <Link className={classes.link} to="/HoT">
        Heads or Tails
      </Link>
    </nav>
  );
};

export default Nav;
