import { useState } from 'react'

export default function MessengerWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="messenger-widget">
      {open && (
        <div className="messenger-panel" role="dialog" aria-label="Messenger">
          <div className="messenger-header">
            <strong>Scrie-ne</strong>
            <button onClick={() => setOpen(false)} aria-label="Închide">×</button>
          </div>
          <div className="messenger-body">
            <p>Salut! Cu ce te putem ajuta?</p>
            <div className="messenger-actions">
              <a href="https://m.me/username" target="_blank" rel="noreferrer">Messenger</a>
              <a href="https://wa.me/37300111222" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="https://t.me/username" target="_blank" rel="noreferrer">Telegram</a>
            </div>
          </div>
        </div>
      )}
      <button className="messenger-button" onClick={() => setOpen(v => !v)} aria-label="Deschide Messenger">💬</button>
    </div>
  )
}