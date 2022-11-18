import React from 'react';
import { Navbar, Nav, Container, NavDropdown,} from 'react-bootstrap';
import {Link} from "react-router-dom";


  const  NavBar = () => {
    return (

        <Navbar bg="Danger bg-danger shadow-lg p-2 rounded border border-light border border-2 " expand="xl">
          <Container> 
            <Navbar.Brand className="NAVGR" href="/">Game Room</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="shadow-lg p-2  m-2 rounded bg-body border border-dark">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login"> Login</Nav.Link>
                <Navbar.Text>User: <a href="/login">Jio</a></Navbar.Text>

                <NavDropdown title="Games" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/RPS">Rock Paper Scissors</NavDropdown.Item>
                  <NavDropdown.Item href="/HoT">Heads or Tails</NavDropdown.Item>
                  <NavDropdown.Item href="/HoL">High or Low</NavDropdown.Item>
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
