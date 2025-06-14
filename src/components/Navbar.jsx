import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <button 
        className="nav-toggle" 
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Etusivu</NavLink></li>
        <li><NavLink to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>Kuvagalleria</NavLink></li>
        <li><NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Yhteystiedot</NavLink></li>
        <li><NavLink to="/guestbook" className="nav-link" onClick={() => setIsOpen(false)}>Vieraskirja</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
