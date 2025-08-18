import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const set = (lng) => () => i18n.changeLanguage(lng)

  return (
    <div className="lang-switch">
      <button onClick={set('ro')} className={i18n.language==='ro' ? 'active' : ''}>RO</button>
      <span> | </span>
      <button onClick={set('ru')} className={i18n.language==='ru' ? 'active' : ''}>RU</button>
    </div>
  )
}
