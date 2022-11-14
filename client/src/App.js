import HoT from "./components/headsOrTails";
import HoL from './pages/HoL';
import Auth from "./components/Auth";
import RPS from "./components/rockPaperScissors";
import Home from "./pages/Home";
import Login from "./pages/login"
// import NavBar  from "./components/NavBar";
// import Nav from "./components/Nav";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown,} from 'react-bootstrap';
// import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
  // let [user, setUser] = useState(null);

  return (

  <div className="App">
    <header>
       <Navbar bg="primary" expand="xl">
          <Container>
            <Navbar.Brand href="#home">Game Room</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
                <Navbar.Text>User: <a href="#login">Jio</a></Navbar.Text>

                <NavDropdown title="Games" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Rock Paper Scissors</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Heads or Tails</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">High or Low</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
         </Navbar>
      </header>
    </div>
  );
}

export default App;

//       <div className="flex-column justify-flex-start min-100-vh">
//         <Nav user={user} />
//         <div className="container">
//           <BrowserRouter>
//           <NavBar />
//           <Routes>
//           <Route path="/" element = {<Home />}/>
//           <Route path="/auth" element={<Auth setUser={setUser} />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/RPS" element={<RPS />} />
//           <Route path="/HoL" element={<HoL />} />
//           <Route path="/HoT" element={<HoT />} />
//           </Routes>
//           </BrowserRouter>
//         </div>
//     </div>
//   );
// };

