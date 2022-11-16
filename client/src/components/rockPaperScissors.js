import rockImage from "../images/Rock.png";
import scissorImage from "../images/scissors.png";
import paperImage from "../images/paper.png";
import React, { useState } from "react";

const RPS = () => {
  // const [result, setResult] = useState("");
  // const Rock = () => {
  //   let userChoice = "Rock";
  //   generateComputerChoice();
  //   getResult();
  //   function generateComputerChoice() {
  //     const randomNumber = Math.floor(Math.random() * 3) + 1;
  //     if (randomNumber === 1) {
  //       computerChoice = Rock;
  //     }
  //     if (randomNumber === 2) {
  //       computerChoice = Scissor;
  //     }
  //     if (randomNumber === 3) {
  //       computerChoice = Paper;
  //     }
  //   }
  //   async function getResult() {
  //     if (computerChoice === userChoice) {
  //       result = "Draw!";
  //     }
  //     if (computerChoice === Rock && userChoice === Paper) {
  //       console.log(res);
  //       result = "Username!";
  //     }
  //     if (computerChoice === Rock && userChoice === Scissor) {
  //       result = "Computer!";
  //     }
  //     if (computerChoice === Paper && userChoice === Scissor) {
  //       console.log(res);
  //       result = "Username!";
  //     }
  //     if (computerChoice === Paper && userChoice === Scissor) {
  //       result = "Computer!";
  //     }
  //     if (computerChoice === Scissor && userChoice === Rock) {
  //       result = "Username!";
  //     }
  //     if (computerChoice === Scissor && userChoice === Paper) {
  //       result = "Computer!";
  //     }
  //     resultDisplay = result;
  //   }
  // };
  // possibleChoices.forEach((possibleChoice) =>
  //   possibleChoice.addEventListener("click", (e) => {
  //     userChoice = e.target.id;
  //     if (userChoice === "Rock") {
  //       userChoiceImage = rockImage;
  //     }
  //     if (userChoice === "Scissors") {
  //       userChoiceImage = scissorImage;
  //     }
  //     if (userChoice === "Paper") {
  //       userChoiceImage = paperImage;
  //     }
  //     generateComputerChoice();
  //     getResult();
  //   })
  // );
  // function generateComputerChoice() {
  //   const randomNumber = Math.floor(Math.random() * 3) + 1;
  //   if (randomNumber === 1) {
  //     computerChoice = rockImage;
  //   }
  //   if (randomNumber === 2) {
  //     computerChoice = scissorImage;
  //   }
  //   if (randomNumber === 3) {
  //     computerChoice = paperImage;
  //   }
  // }
  // return (
  //   <div>
  //     <h2>Rock Paper Scissors</h2>
  //     <h2>
  //       Your Choice: <span>{userChoiceImage}</span>
  //     </h2>
  //     <h2>
  //       Computer Choice: <span>{computerChoice}</span>
  //     </h2>
  //     <h2>
  //       Winner: <span>{Winner}</span>
  //     </h2>
  //     <button onClick={Rock}>Rock</button>
  //     <button onClick={Paper}>Paper</button>
  //     <button onClick={Scissors}>Scissors</button>
  //     <p>{result}</p>
  //   </div>
  // );
};

export default RPS;
