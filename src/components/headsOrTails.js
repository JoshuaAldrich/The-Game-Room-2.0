import headImg from "../images/heads.png";

const HoT = () => {
  return (
    <div class="container-fluid">
      <h2 class="special-card-4">Heads or Tails</h2>
      <div className="imageContainer">{headImg}</div>
      <button>Heads</button>
      <button>Tails</button>
      <div>Result</div>
      <p>UserID</p>
      <p>Here is filler text</p>
    </div>
  );
};

export default HoT;
