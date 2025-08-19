import { NavLink } from 'react-router-dom'
import { FiPhoneCall, FiInstagram, FiMail } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../assets/gallery/logo.png'

export default function Header() {
  const { t } = useTranslation()
  return (
    <header className="site-header sticky">
      <div className="container header-inner">
        <div className="logo">
          <a href="#/" className="logo-a" aria-label="Ultraservice SRL">
            <img src={logo} alt="Salon de Frumusețe" className="logo-img" />
          </a>
        </div>
        <nav className="main-nav">
          <NavLink to="/" end>{t('nav.home')}</NavLink>
          <NavLink to="/about">{t('nav.about')}</NavLink>
          <NavLink to="/gallery">{t('nav.gallery')}</NavLink>
          <NavLink to="/contact">{t('nav.contact')}</NavLink>
        </nav>
        <div className="social">
          <a href="tel:+37379613613" aria-label={t('aria.phone')}><FiPhoneCall className="icon" /></a>
          <a href="https://www.instagram.com/mamaliga.alexandru/" target="_blank" rel="noreferrer" aria-label={t('aria.instagram')}><FiInstagram className="icon" /></a>
          <a href="mailto:alexmam80@gmail.com" aria-label={t('aria.email')}><FiMail className="icon" /></a>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
