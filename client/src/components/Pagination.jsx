import { useTranslation } from 'react-i18next'
export default function Pagination({ current, total, onChange }) {
  const { t } = useTranslation()
  if (total <= 1) return null
  const pages = Array.from({ length: total }, (_, i) => i + 1)
  return (
    <div className="pagination">
      <button disabled={current === 1} onClick={() => onChange(current - 1)}>{t('pagination.prev')}</button>
      {pages.map(p => (
        <button key={p} className={p === current ? 'active' : ''} onClick={() => onChange(p)}>{p}</button>
      ))}
      <button disabled={current === total} onClick={() => onChange(current + 1)}>{t('pagination.next')}</button>
    </div>
  )
}