import HoT from "./components/headsOrTails";
import HoL from './pages/HoL';
// import Auth from "./components/Auth";
import RPS from "./components/rockPaperScissors";
import Home from "./pages/Home";
import Login from "./pages/login";
import Game from "./components/Game";
import NavBar from "./components/NavBar";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    <Nav />
    <NavBar />
    <Home />
    <Login />
    <RPS />
    <Game />
    <Nav />
    <HoL />
    <HoT />
    
    </div>
  );
}

export default App;
