import { NavLink } from 'react-router-dom'
import { FiPhoneCall, FiInstagram, FiMail } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="site-header sticky">
      <div className="container header-inner">
        <div className="logo">MyLogo</div>
        <nav className="main-nav">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? 'active' : ''}>Gallery</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
        <div className="social">
          <a href="tel:+37379613613" aria-label="Telefon"><FiPhoneCall className="icon" /></a>
          <a href="https://www.instagram.com/mamaliga.alexandru/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram className="icon" /></a>
          <a href="mailto:alexmam80@gmail.com" aria-label="Email"><FiMail className="icon" /></a>
        </div>
      </div>
    </header>
  )
}