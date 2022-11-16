import headsImg from "../images/heads.png";
import tailsImg from "../images/tails.png";
import classes from "../styles/HoT.module.css";
import React, { useState } from "react";

const HoT = () => {
  const [result, setResult] = useState("");
  async function heads() {
    let coin = Math.random();
    document.querySelector("#imageContainer").classList.toggle(classes.rotate);
    if (coin < 0.5) {
      setTimeout(function () {
        setResult({
          img: tailsImg,
          message: (
            <span style={{ color: "black" }}>
              You chose incorrectly, it is tails
            </span>
          ),
        });
      }, 1000);
    } else {
      setTimeout(function () {
        setResult({
          img: headsImg,
          message: (
            <span style={{ color: "black" }}>
              You chose correctly, it is heads
            </span>
          ),
        });
      }, 1000);
    }
  }
  async function tails() {
    let coin = Math.random();
    document.querySelector("#imageContainer").classList.toggle(classes.rotate);
    if (coin < 0.5) {
      setTimeout(function () {
        setResult({
          img: headsImg,
          message: (
            <span style={{ color: "black" }}>
              You chose correctly, it is tails
            </span>
          ),
        });
      }, 1000);
    } else {
      setTimeout(function () {
        setResult({
          img: tailsImg,
          message: (
            <span style={{ color: "black" }}>
              You chose incorrectly, it is heads
            </span>
          ),
        });
      }, 1000);
    }
  }

  return (
    <div>
      <h2>Heads or Tails</h2>
      <img
        id="imageContainer"
        src={result?.img ? result.img : headsImg}
        alt="Head coin"
        className={classes.imageContainer}
      />
      <button onClick={heads}>Heads</button>
      <button onClick={tails}>Tails</button>
      <div>{result?.message}</div>
      <p className="user_id">UserID</p>
      <p>Here is filler text</p>
    </div>
  );
};

export default HoT;
