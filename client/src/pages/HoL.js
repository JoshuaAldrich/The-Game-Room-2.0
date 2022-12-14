import React, { useState } from "react";

const HoL = () => {
  const [result, setResult] = useState("");
  let randomNumber = Math.floor(Math.random() * 100);
  function checkHigh() {
    let newValue = Math.floor(Math.random() * 100);
    let currentValue = randomNumber;
    if (newValue > currentValue) {
      setResult(() => {
        return `
        ${newValue} is greater than ${currentValue}, so you win.
    `;
      });
    } else {
      setResult(() => {
        return `
        ${newValue} is less than ${currentValue}, so you lose.
    `;
      });
    }
    randomNumber = newValue;
  }

  //Check to see if the value is lower
  function checkLow() {
    let newValue = Math.floor(Math.random() * 100);
    let currentValue = randomNumber;
    if (newValue < currentValue) {
      setResult(() => {
        return `
        ${newValue} is less than ${currentValue}, so you win.
    `;
      });
    } else {
      setResult(() => {
        return `
        ${newValue} is greater than ${currentValue}, so you lose.
    `;
      });
    }
    randomNumber = newValue;
  }

  return (
  <div className='m-5 p-5 bg-white text-center border border-danger border border-3 rounded'>
    <div className="flex-row mt-5">
      <div className="col-12 text-center">

        <h2 className="HLT">Pick whether the next number will be high or low.</h2>
        <p>{randomNumber}</p>
        <button className="HLH" onClick={checkHigh}>High</button>
        <p>Or</p>

        <button className="HLL" onClick={checkLow}>Low</button>
        <p className="HLR">{result}</p>
      </div>
    </div>
   </div>
  );
};

export default HoL;
