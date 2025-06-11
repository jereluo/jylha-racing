import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Etusivu</Link></li>
        <li><Link to="/gallery" style={{ color: '#fff' }}>Kuvagalleria</Link></li>
        <li><Link to="/contact" style={{ color: '#fff' }}>Yhteystiedot</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
