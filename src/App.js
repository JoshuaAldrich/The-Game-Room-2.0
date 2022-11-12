import HoT from "./components/headsOrTails";
import HoL from "./components/highOrLow";
import Auth from "./components/Auth";
import RPS from "./components/rockPaperScissors";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  let [user, setUser] = useState(null);

  async function getCurrentUser() {
    let res = await axios.get("http://localhost:3001/api/users/currentUser", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setUser(res.data);
  }
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Nav user={user} />

      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth setUser={setUser} />} />
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
