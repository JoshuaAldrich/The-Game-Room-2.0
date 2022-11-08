import HoT from "./headsOrTails";
import HoL from "./highOrLow";
import Login from "./login";
import RPS from "./rockPaperScissors";
import Home from "./Homepage";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />

      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/RPS" element={<RPS />} />
          <Route path="/HoL" element={<HoL />} />
          <Route path="/HoT" element={<HoT />} />
        </Routes>
      </div>
      <article id="contact" class="contact-me">
        <div>
          <h2>The Game Room</h2>
        </div>
      </article>
    </>
  );
};

export default App;
