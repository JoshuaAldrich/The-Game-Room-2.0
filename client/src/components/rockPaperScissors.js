const RPS = () => {
  return (
    <div>
      <h4 className="h4"><span className="rock">Rock </span>
      <span className="paper">Paper</span>
      <span className="scissors"> Scissors</span> </h4>
      <h4 className="h4">
        Your Choice: <span></span>
      </h4>
      <h4 className="h4">
        Computer Choice: <span></span>
      </h4>
      <h4 className="h4">
        Winner: <span></span>
      </h4>
      <button className="btn1">Rock</button>
      <button className="btn2">Paper</button>
      <button className="btn3">Scissors</button>
      <p></p>
    </div>
  );
};

export default RPS;
