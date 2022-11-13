import HoT from "./components/headsOrTails";
import HoL from './pages/HoL';
import Auth from "./components/Auth";
import RPS from "./components/rockPaperScissors";
import Home from "./pages/Home";
import Login from "./pages/login"
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  let [user, setUser] = useState(null);

  return (
    <>
      <div className="flex-column justify-flex-start min-100-vh">
        <Nav user={user} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth setUser={setUser} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/RPS" element={<RPS />} />
            <Route path="/HoL" element={<HoL />} />
            <Route path="/HoT" element={<HoT />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
