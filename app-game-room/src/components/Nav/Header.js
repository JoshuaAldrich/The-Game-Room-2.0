import './Header.css';
function Header() {
  return (
    <header>
      <h1>The Game Room</h1>
      <ul className="me-auto">
        <li><a href="#home">Login </a></li>
        <li><a href="#games">Games </a></li>
        <li><a href="#scores">Scores </a></li>
      </ul>
    </header>

  );
}

export default Header;