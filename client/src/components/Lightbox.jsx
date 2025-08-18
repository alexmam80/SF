import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const { t } = useTranslation()
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  if (index < 0) return null
  const img = images[index]

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label={t('lightbox.close')}>×</button>
      <button className="lb-prev" onClick={(e)=>{e.stopPropagation(); onPrev()}} aria-label={t('lightbox.prev')}>‹</button>
      <img src={img} alt={`Imagine ${index+1}`} onClick={e=>e.stopPropagation()} />
      <button className="lb-next" onClick={(e)=>{e.stopPropagation(); onNext()}} aria-label={t('lightbox.next')}>›</button>
    </div>
  )
}