import React from 'react';

const RPS = () => {
  return (
  <div className='RPS m-5 p-5 bg-white text-center border border-danger border border-3 rounded'>
    <h2>Rock Paper Scissors</h2>
    <h2>
      Your Choice: <span></span>
    </h2>
    <h2>
      Computer Choice: <span></span>
    </h2>
     <h2>
       Winner: <span></span>
     </h2>
        <button className="btn1">Rock</button>
        <button className="btn2">Paper</button>
        <button className="btn3">Scissors</button>
        <p></p>
   </div>
  )
}
 export default RPS;
