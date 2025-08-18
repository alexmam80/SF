import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function MessengerWidget() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <div className="messenger-widget">
      {open && (
        <div className="messenger-panel" role="dialog" aria-label={t('widget.title')}>
          <div className="messenger-header">
            <strong>{t('widget.title')}</strong>
            <button onClick={() => setOpen(false)} aria-label={t('aria.messenger_close')}>×</button>
          </div>
          <div className="messenger-body">
            <p>{t('widget.hello')}</p>
            <div className="messenger-actions">
              <a href="https://www.instagram.com/mamaliga.alexandru/" target="_blank" rel="noreferrer">{t('widget.messenger')}</a>
              <a href="https://wa.me/37379613613" target="_blank" rel="noreferrer">{t('widget.whatsapp')}</a>
              <a href="https://t.me/alexmam80" target="_blank" rel="noreferrer">{t('widget.telegram')}</a>
            </div>
          </div>
        </div>
      )}
      <button className="messenger-button" onClick={() => setOpen(v => !v)} aria-label={open ? t('aria.messenger_close') : t('aria.messenger_open')}>💬</button>
    </div>
  )
}