import { useMemo, useState } from 'react'
import SEO from '../components/SEO'
import Lightbox from '../components/Lightbox'
import Pagination from '../components/Pagination'
import { useTranslation } from 'react-i18next'

const PER_PAGE = 9

export default function Gallery() {
  const { t } = useTranslation()
  // Încarcă toate imaginile din src/assets/gallery (jpg/jpeg/png/webp)
  const images = useMemo(() => {
    const mods = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' })
    const urls = Object.values(mods)
    urls.sort() // ordonare după nume de fișier
    return urls
  }, [])

  const [page, setPage] = useState(1)
  const [lightIndex, setLightIndex] = useState(-1)

  const totalPages = Math.ceil(images.length / PER_PAGE) || 1
  const start = (page - 1) * PER_PAGE
  const current = images.slice(start, start + PER_PAGE)

  const openLightbox = (globalIndex) => setLightIndex(globalIndex)
  const closeLightbox = () => setLightIndex(-1)
  const prev = () => setLightIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setLightIndex(i => (i + 1) % images.length)

  return (
    <section>
      <SEO title="Galerie" description="Vezi lucrările noastre: sprâncene, buze și contur de ochi." />
      <h1>Gallery</h1>
      {images.length === 0 && <p>Adaugă imagini în <code>src/assets/gallery</code> (jpg/png/webp) și reîncarcă pagina.</p>}
      <div className="gallery-grid">
        {current.map((src, idx) => {
          const globalIdx = start + idx
          return (
            <button key={src} className="gallery-item" onClick={() => openLightbox(globalIdx)}>
              <img src={src} loading="lazy" alt={t('gallery.thumb_alt', { n: globalIdx + 1 })} />
            </button>
          )
        })}
      </div>

      <Pagination current={page} total={totalPages} onChange={setPage} />

      {lightIndex >= 0 && (
        <Lightbox images={images} index={lightIndex} onClose={closeLightbox} onPrev={prev} onNext={next} />
      )}
    </section>
  )
}