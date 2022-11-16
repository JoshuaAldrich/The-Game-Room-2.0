import React, {useState} from 'react';
import { Navbar, Nav, Container, NavDropdown,} from 'react-bootstrap';
import Logo from "../images/Logo.png";

  const  NavBar = () => {

    let [user, setUser] = useState(null)

    return (

        <Navbar bg="warning shadow-lg p-3  rounded border border-danger border border-2" expand="xl">
          <Container> 
            <Navbar.Brand href="#home">Game Room</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="shadow-lg px-4  mb-2 rounded bg-secondary border border-danger">
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
);
}
    

export default NavBar;

