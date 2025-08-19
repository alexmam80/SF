import { Link } from 'react-router-dom'
import { FiPhoneCall, FiInstagram, FiMail } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import logo from '../assets/gallery/logo.png'

export default function Footer() {
  const { t } = useTranslation()
  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="site-footer">
      <button className="back-to-top" onClick={goTop} aria-label={t('aria.back_to_top')}>↑</button>
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="logo">
            <a href="#/" className="logo-a" aria-label="Ultraservice SRL">
              <img src={logo} alt="Salon de Frumusețe" className="logo-img" />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <nav className="footer-nav">
            <Link to="/" end>{t('nav.home')}</Link>
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/gallery">{t('nav.gallery')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
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
        <span>{t('footer.rights')}</span>
      </div>
    </footer>
  )
}
