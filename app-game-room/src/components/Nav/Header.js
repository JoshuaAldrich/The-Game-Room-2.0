import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The Game Room</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#games">Games</Nav.Link>
            <Nav.Link href="#scores">Scores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;