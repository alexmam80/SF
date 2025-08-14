import { Link } from 'react-router-dom'
import { FiPhoneCall, FiInstagram, FiMail } from 'react-icons/fi'

export default function Footer() {
  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="site-footer">
      <button className="back-to-top" onClick={goTop} aria-label="Back to top">↑</button>
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="logo">MyLogo</div>
        </div>
        <div className="footer-col">
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-col">
          <div className="social">
            <a href="tel:+37379613613" aria-label="Telefon"><FiPhoneCall className="icon" /></a>
            <a href="https://www.instagram.com/mamaliga.alexandru/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram className="icon" /></a>
            <a href="mailto:alexmam80@gmail.com" aria-label="Email"><FiMail className="icon" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025. All rights reserved</span>
      </div>
    </footer>
  )
}