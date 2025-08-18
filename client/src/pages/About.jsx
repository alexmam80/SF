import SEO from '../components/SEO'
import img1 from '../assets/gallery/photo7.jpg'
import img2 from '../assets/gallery/tatuaj.jpg'
import img3 from '../assets/gallery/tatuaj2.jpg'
import img4 from '../assets/gallery/photo10.jpg'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <section className="corp about-page">
      <SEO title={t('seo.about_title')} description={t('seo.about_desc')} />

      {/* Sub‑hero */}
      <div className="about-hero">
        <h1>{t('about.title')}</h1>
        <p>{t('about.intro')}</p>
      </div>

      {/* Bloc 1: imagine stânga, text dreapta */}
      <div className="feature">
        <div className="img"><img src={img1} alt="Coafor – puterea frumuseții" /></div>
        <div className="text">
          <h2>{t('about.p1_title')}</h2>
          <p>{t('about.p1_text')}</p>
          <ul>
            <li>{t('about.p1_list.i1')}</li>
            <li>{t('about.p1_list.i2')}</li>
            <li>{t('about.p1_list.i3')}</li>
          </ul>
        </div>
      </div>

      {/* Bloc 2: text stânga, imagine dreapta */}
      <div className="feature reverse">
        <div className="text">
          <h2>{t('about.p2_title')}</h2>
          <p>{t('about.p2_text_1')}</p>
          <p>{t('about.p2_text_2')}</p>
        </div>
        <div className="img"><img src={img2} alt="Tatuaj – exemplu" /></div>
      </div>

      {/* Bloc 3: imagine stânga, text dreapta */}
      <div className="feature">
        <div className="img"><img src={img3} alt="Varietăți de tatuaj" /></div>
        <div className="text">
          <h2>{t('about.p3_title')}</h2>
          <p>{t('about.p3_intro')}</p>
          <ul>
            <li><strong>{t('about.p3_items.i1_b')}</strong>{t('about.p3_items.i1_t')}</li>
            <li><strong>{t('about.p3_items.i2_b')}</strong>{t('about.p3_items.i2_t')}</li>
            <li><strong>{t('about.p3_items.i3_b')}</strong>{t('about.p3_items.i3_t')}</li>
            <li><strong>{t('about.p3_items.i4_b')}</strong>{t('about.p3_items.i4_t')}</li>
          </ul>
        </div>
      </div>

      {/* Bloc 4: text stânga, imagine dreapta (Serviciile Noastre) */}
      <div className="feature reverse">
        <div className="text">
          <h2>{t('about.services_title')}</h2>
          <p>{t('about.services_text')}</p>
          <ul className="list-servicii">
            <li>{t('about.services_list.i1')}</li>
            <li>{t('about.services_list.i2')}</li>
            <li>{t('about.services_list.i3')}</li>
          </ul>
        </div>
        <div className="img"><img src={img4} alt="Tatuaj sprâncene – exemplu" /></div>
      </div>

      {/* Statistici scurte */}
      <div className="stats">
        <div className="stat"><div className="num">7+</div><div>{t('about.stats.y_exp')}</div></div>
        <div className="stat"><div className="num">1200+</div><div>{t('about.stats.done')}</div></div>
        <div className="stat"><div className="num">98%</div><div>{t('about.stats.happy')}</div></div>
      </div>
    </section>
  )
}