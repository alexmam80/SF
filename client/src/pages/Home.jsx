import { Link } from 'react-router-dom'
import { FiCheckCircle, FiCalendar, FiImage } from 'react-icons/fi'
import SEO from '../components/SEO'
import heroImg from '../assets/gallery/photo7.jpg'

export default function Home() {
  const siteUrl = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'MyLogo',
    url: siteUrl || undefined,
    image: siteUrl ? `${siteUrl}/og-default.jpg` : undefined,
    telephone: '+37300000000',
    address: { '@type': 'PostalAddress', addressLocality: 'Chișinău', addressCountry: 'MD' },
    sameAs: ['https://instagram.com/username']
  }

  return (
    <section className="home-page">
      <SEO
        title="Home"
        description="Salon de micropigmentare: sprâncene, buze și contur ochi. Rezultate naturale și sigure."
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <p className="eyebrow">Salon · Micropigmentare · Îngrijire</p>
          <h1>Frumusețe care ține<br />mai mult decât o zi</h1>
          <p className="lead">Sprâncene, buze și contur de ochi realizate de specialiști. Rezultate naturale, sigure și de durată.</p>
          <div className="hero-actions">
            <Link to="/gallery" className="btn btn-primary"><FiImage /> Vezi galeria</Link>
            <Link to="/contact" className="btn btn-secondary"><FiCalendar /> Programează-te</Link>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImg} alt="Procedură de frumusețe" />
        </div>
      </div>

      {/* SERVICII – 3 carduri scurte */}
      <div className="cards">
        <div className="card">
          <h3>Buze</h3>
          <p>Contur și umbrire pentru volum și culoare uniforme.</p>
        </div>
        <div className="card">
          <h3>Sprâncene</h3>
          <p>Formă personalizată: powder/ombré sau efect fir-cu-fir.</p>
        </div>
        <div className="card">
          <h3>Ochi</h3>
          <p>Contur discret sau accentuat; aspect mereu îngrijit.</p>
        </div>
      </div>

      {/* DE CE NOI */}
      <div className="why">
        <h2>De ce să ne alegi</h2>
        <ul>
          <li><FiCheckCircle /> Tehnici moderne și igienă strictă</li>
          <li><FiCheckCircle /> Consultanță înainte și după procedură</li>
          <li><FiCheckCircle /> Rezultate naturale, adaptate trăsăturilor tale</li>
        </ul>
      </div>
    </section>
  )
}