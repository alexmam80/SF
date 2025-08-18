import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiCheckCircle, FiCalendar, FiImage } from 'react-icons/fi'
import SEO from '../components/SEO'
import heroImg from '../assets/gallery/photo7.jpg'


export default function Home() {
  const { t } = useTranslation()
  const siteUrl = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'MyLogo',
    url: siteUrl || undefined,
    image: siteUrl ? `${siteUrl}/og-default.jpg` : undefined,
    telephone: '+37379613613',
    address: { '@type': 'PostalAddress', addressLocality: 'Chișinău', addressCountry: 'MD' },
    sameAs: ['https://www.instagram.com/mamaliga.alexandru/']
  }

  return (
    <section className="home-page">
      <SEO title={t('seo.home_title')} description={t('seo.home_desc')} jsonLd={jsonLd} />


      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1 dangerouslySetInnerHTML={{__html: t('hero.title').replace('\n','<br />')}} />
          <p className="lead">{t('hero.lead')}</p>
          <div className="hero-actions">
            <Link to="/gallery" className="btn btn-primary"><FiImage /> {t('hero.cta_gallery')}</Link>
            <Link to="/contact" className="btn btn-secondary"><FiCalendar /> {t('hero.cta_book')}</Link>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImg} alt="Procedură de frumusețe" />
        </div>
      </div>

      {/* SERVICII – 3 carduri scurte */}
      <div className="cards">
        <div className="card">
          <h3>{t('home.cards.lips_title')}</h3>
          <p>{t('home.cards.lips_desc')}</p>
        </div>
        <div className="card">
          <h3>{t('home.cards.brows_title')}</h3>
          <p>{t('home.cards.brows_desc')}</p>
        </div>
        <div className="card">
          <h3>{t('home.cards.eyes_title')}</h3>
          <p>{t('home.cards.eyes_desc')}</p>
        </div>
      </div>

      {/* DE CE NOI */}
      <div className="why">
        <h2>{t('home.why.title')}</h2>
        <ul>
          <li>{t('home.why.i1')}</li>
          <li>{t('home.why.i2')}</li>
          <li>{t('home.why.i3')}</li>
        </ul>
      </div>
    </section>
  )
}