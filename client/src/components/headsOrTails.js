// import headImg from "../images/heads.png";
// import tailsImg from "../images/tails.png";
// import classes from "../styles/headsOrTails.module.css";
// import React, { useState } from "react";

const HoT = () => {
  <div className='m-5 p-5 bg-white text-center border border-danger border border-3 rounded'></div>
  // const [result, setResult] = useState("");

  // async function heads() {
  //   let coin = Math.random();
  //   headImg.classList.toggle("rotate");

  //   if (coin < 0.5) {
  //     setTimeout(function () {
  //       imageContainer = { tailsImg };
  //       result.innerHTML =
  //         "<span style='color:black;'>You chose incorrectly, it is tails</span>";
  //     }, 1000);
  //   } else {
  //     setTimeout(function () {
  //       imageContainer.innerHTML = `<img src="${headsImage}"/>`;
  //       result.innerHTML =
  //         "<span style='color:black;'>You chose correctly, it is heads</span>";
  //     }, 1000);
  //     const res = await fetch(`/api/users/win-HoT/${user_id}`, {
  //       method: "PUT",
  //     });
  //     console.log(res);
  //   }
  // }

  // async function tails() {
  //   let coin = Math.random();
  //   imageContainer.firstElementChild.classList.toggle("rotate");

  //   if (coin < 0.5) {
  //     setTimeout(function () {
  //       imageContainer.innerHTML = `<img src="${tailsImage}"/>`;
  //       result.innerHTML =
  //         "<span style='color:black;'>You chose correctly, it is heads</span>";
  //     }, 1000);
  //     const res = await fetch(`/api/users/win-HoT/${user_id}`, {
  //       method: "PUT",
  //     });
  //     console.log(res);
  //   } else {
  //     setTimeout(function () {
  //       imageContainer.innerHTML = `<img src="${headsImage}"/>`;
  //       result.innerHTML =
  //         "<span style='color:black;'>You chose incorrectly, it is tails</span>";
  //     }, 1000);
  //   }
  // }

  return (
    <div>
      <h2>Heads or Tails</h2>
      {/* <img
        id="imageContainer"
        src={headImg}
        alt="Head coin"
        className={classes.imageContainer}
      />
      <button onClick={heads}>Heads</button>
      <button onClick={tails}>Tails</button>
      <div id="result">Result</div>
      <p className="user_id">UserID</p>
      <p>Here is filler text</p> */}
    </div>
  );
};

export default HoT;
