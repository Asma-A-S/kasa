import { NavLink } from 'react-router-dom-v5-compat'
import Logo from '../assets/LOGO.png'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header_logo">
        <img src={Logo} alt="logo" />
      </NavLink>
      <nav className="nav_header">
        <NavLink to="/" className="nav_link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav_link">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
