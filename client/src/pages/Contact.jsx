import { useMemo, useRef, useState } from 'react'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState(null)
  const fileRef = useRef(null)

  // captcha simplă (ex: 3 + 7 = ?)
  const [a, b] = useMemo(() => [
    Math.floor(Math.random()*9)+1,
    Math.floor(Math.random()*9)+1,
  ], [])
  const [captcha, setCaptcha] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    if (Number(captcha) !== (a + b)) {
      setStatus({ type: 'error', text: t('contact.errors.captcha') })
      return
    }

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      setStatus({ type: 'error', text: t('contact.errors.required') })
      return
    }

    try {
      const fd = new FormData()
      fd.append('firstName', firstName)
      fd.append('lastName', lastName)
      fd.append('email', email)
      fd.append('phone', phone)
      fd.append('message', message)
      fd.append('date', date)
      fd.append('time', time)
      if (file) fd.append('attachment', file)

      // apel direct către serverul Express (folosește VITE_API_URL în production)
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
      const res = await fetch(`${API_URL}/api/appointments`, {
        method: 'POST',
        body: fd
      })
      const data = await res.json()
      if (data.ok) {
        setStatus({ type: 'ok', text: t('contact.status_ok') })
        // resetare formular
        setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setMessage(''); setDate(''); setTime(''); setFile(null); setCaptcha('')
        if (fileRef.current) fileRef.current.value = ''
      } else {
        setStatus({ type: 'error', text: t('contact.errors.generic') })
      }
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', text: t('contact.errors.network') })
    }
  }

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (!f) return setFile(null)
    const ok = ['image/png', 'image/jpeg']
    if (!ok.includes(f.type)) {
      setStatus({ type: 'error', text: t('contact.errors.filetype') })
      e.target.value = ''
      return
    }
    setFile(f)
  }

  return (
    <section>
      <SEO title={t('seo.contact_title')} description={t('seo.contact_desc')} />
      <h1>{t('contact.title')}</h1>

      <div className="contact-info">
        <p><strong>{t('contact.info.instagram')}:</strong> <a href="https://www.instagram.com/mamaliga.alexandru/" target="_blank" rel="noreferrer">https://www.instagram.com/mamaliga.alexandru/</a></p>
        <p><strong>{t('contact.info.phone')}:</strong> <a href="tel:+37379613613">+373 79 613 613</a></p>
        <p><strong>{t('contact.info.email')}:</strong> <a href="mailto:alexmam80@gmail.com">alexmam80@gmail.com</a></p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="field">
            <label>{t('contact.form.first')}</label>
            <input value={firstName} onChange={e=>setFirstName(e.target.value)} required />
          </div>
          <div className="field">
            <label>{t('contact.form.last')}</label>
            <input value={lastName} onChange={e=>setLastName(e.target.value)} required />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>{t('contact.form.email')}</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label>{t('contact.form.phone')}</label>
            <input value={phone} onChange={e=>setPhone(e.target.value)} required />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>{t('contact.form.date')}</label>
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} required />
          </div>
          <div className="field">
            <label>{t('contact.form.time')}</label>
            <input type="time" value={time} onChange={e=>setTime(e.target.value)} required />
          </div>
        </div>

        <div className="field">
          <label>{t('contact.form.message')}</label>
          <textarea rows="4" value={message} onChange={e=>setMessage(e.target.value)} placeholder={t('contact.form.ph_message')} />
        </div>

        <div className="field">
          <label>{t('contact.form.file')}</label>

          <div className="file-inline">
            <button
              type="button"
              className="btn"
              onClick={() => fileRef.current?.click()}
            >
              {t('contact.form.choose')}
            </button>

            <span className="file-name" aria-live="polite">
              {file ? file.name : t('contact.form.no_file')}
            </span>
          </div>

          <input
            ref={fileRef}
            id="attach"
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleFile}
            style={{ display: 'none' }}
          />
        </div>

        <div className="field">
          <label>{t('contact.form.captcha', { a, b }) }</label>
          <input value={captcha} onChange={e=>setCaptcha(e.target.value)} placeholder={t('contact.form.ph_captcha')} />
        </div>

        <button type="submit">{t('contact.form.submit')}</button>
        {status && (
          <p className={status.type === 'ok' ? 'status-ok' : 'status-err'}>{status.text}</p>
        )}
      </form>

      <div className="map-wrap">
        <iframe
          title="Harta"
          src="https://www.google.com/maps?q=Chișinău%20Moldova&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}