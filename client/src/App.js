import { Routes, Route} from "react-router-dom";
import HoT from "./components/headsOrTails";
import HoL from './pages/HoL';
import RPS from "./components/rockPaperScissors";
import Home from "./pages/Home";
import Login from "./pages/Login"
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./pages/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';



const App=() =>{
  return (
    <div className="flex-column justify-flex-start min-100-vh">
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/RPS" element={<RPS />} />
        <Route path="/HoL" element={<HoL />} />
        <Route path="/HoT" element={<HoT />} />
      </Routes>
    </div>
  </div>

  );
}

export default App;
