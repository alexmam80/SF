import SEO from '../components/SEO'
import img1 from '../assets/gallery/photo7.jpg'
import img2 from '../assets/gallery/tatuaj.jpg'
import img3 from '../assets/gallery/tatuaj2.jpg'
import img4 from '../assets/gallery/photo10.jpg'

export default function About() {
  return (
    <section className="corp about-page">
      <SEO title="Despre noi" description="Studio specializat în micropigmentare: precizie, siguranță și estetică pentru rezultate care rezistă." />

      {/* Sub‑hero */}
      <div className="about-hero">
        <h1>Despre noi</h1>
        <p>Suntem un studio specializat în micropigmentare – combinăm precizia, siguranța și estetica pentru rezultate care rezistă.</p>
      </div>

      {/* Bloc 1: imagine stânga, text dreapta */}
      <div className="feature">
        <div className="img"><img src={img1} alt="Coafor – puterea frumuseții" /></div>
        <div className="text">
          <h2>Puterea frumuseții</h2>
          <p>
            Chiar și atotputernicul Pointing nu are control asupra textelor oarbe, este o viață aproape
            neortografică. Într-o zi, totuși, o mică linie de text oarbă pe nume Lorem Ipsum a decis să plece
            în Lumea Gramaticii.
          </p>
          <ul>
            <li>Eliminarea tatuajului cu laser</li>
            <li>Micropigmentarea sprâncenelor</li>
            <li>Micropigmentarea buzelor</li>
          </ul>
        </div>
      </div>

      {/* Bloc 2: text stânga, imagine dreapta */}
      <div className="feature reverse">
        <div className="text">
          <h2>Tatuajul</h2>
          <p>
            Tatuajul, cunoscut și sub denumirea de machiaj permanent, este o procedură apreciată de multe femei.
            Acesta este un machiaj care nu trebuie reînnoit în fiecare zi și spălat înainte de culcare. Este un tatuaj
            temporar, în timpul căruia un pigment natural de colorare este plasat sub straturile superioare ale pielii.
            Rezultatul este un machiaj de lungă durată, care nu se spală. Tatuajul își păstrează în mod ideal aspectul
            original, durează de la câteva luni la câțiva ani. Cu timpul, culoarea se estompează, dar acest lucru se
            întâmplă foarte lent.
          </p>
          <p>
            Specialiștii salonului „Anastasia” cunosc cât de important este pentru tine să arăți perfect, așa că suntem
            pregătiți să îți oferim orice fel de tatuaj, realizat profesional și la un preț accesibil.
          </p>
        </div>
        <div className="img"><img src={img2} alt="Tatuaj – exemplu" /></div>
      </div>

      {/* Bloc 3: imagine stânga, text dreapta */}
      <div className="feature">
        <div className="img"><img src={img3} alt="Varietăți de tatuaj" /></div>
        <div className="text">
          <h2>Varietăți de tatuaj în salonul de frumusețe „KristinaBeauty”</h2>
          <p>Industria frumuseții oferă o gamă largă de tratamente de machiaj permanent care pot satisface aproape toate nevoile de bază ale femeilor. Cele mai populare:</p>
          <ul>
            <li><strong>Conturul genelor.</strong> Zonele dintre gene sunt pigmentate, creând efectul unui aspect deschis și gene mai bogate; permite ridicarea vizuală a colțurilor ochilor.</li>
            <li><strong>Conturul ochilor.</strong> Machiaj perfect fără efort zilnic. Săgeți subțiri sau îndrăznețe, pe pleoapa superioară sau pe ambele.</li>
            <li><strong>Buze.</strong> Aliniere asimetrie, contur clar, cu umbrire sau umplere completă cu culoare.</li>
            <li><strong>Sprâncene.</strong> Ajustare formă și culoare, efect vizual de densitate (microblading, powder/ombré etc.).</li>
          </ul>
        </div>
      </div>

      {/* Bloc 4: text stânga, imagine dreapta (Serviciile Noastre) */}
      <div className="feature reverse">
        <div className="text">
          <h2>Serviciile Noastre</h2>
          <p>Oferim tatuaje pentru buze, sprâncene și gene, realizate de specialiști calificați.</p>
          <ul className="list-servicii">
            <li>Tatuaj buze</li>
            <li>Tatuaj sprâncene</li>
            <li>Tatuaj gene</li>
          </ul>
        </div>
        <div className="img"><img src={img4} alt="Tatuaj sprâncene – exemplu" /></div>
      </div>

      {/* Statistici scurte */}
      <div className="stats">
        <div className="stat"><div className="num">7+</div><div>ani experiență</div></div>
        <div className="stat"><div className="num">1200+</div><div>proceduri efectuate</div></div>
        <div className="stat"><div className="num">98%</div><div>clienți mulțumiți</div></div>
      </div>
    </section>
  )
}