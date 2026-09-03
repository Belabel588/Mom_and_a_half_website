import { useState } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../context/LanguageContext'

const EMPTY_FORM = { firstName: '', lastName: '', email: '', phone: '', message: '' }

// Formspree is the live submission path — see server/ for the custom Express
// backend, kept in the repo but not wired up for now.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzepjoyy'

export function Contact() {
  const [ref, isVisible] = useRevealOnScroll()
  const { t } = useLanguage()
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(ev) {
    const { id, value } = ev.target
    setForm(prev => ({ ...prev, [id]: value }))
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `${t.contact.emailSubject} – ${form.firstName} ${form.lastName}`,
        }),
      })
      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <div className="contact-section-texts">

        <form className="contact-section-form" onSubmit={handleSubmit}>

          <div className="contact-section-textbox">
            <img className="contact-section-logo" src="./images/logo-pink-nobcg.png" alt={t.contact.logoAlt} />

            <h2 className="contact-section-header">{t.contact.header}</h2>

            <p className="contact-section-text">
              {t.contact.text.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="contact-field">
            <label htmlFor="firstName">{t.contact.firstName}</label>
            <input id="firstName" type="text" value={form.firstName} onChange={handleChange} required />
          </div>

          <div className="contact-field">
            <label htmlFor="lastName">{t.contact.lastName}</label>
            <input id="lastName" type="text" value={form.lastName} onChange={handleChange} required />
          </div>

          <div className="contact-field">
            <label htmlFor="email">{t.contact.email}</label>
            <input id="email" type="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="contact-field">
            <label htmlFor="phone">{t.contact.phone}</label>
            <input id="phone" type="tel" value={form.phone} onChange={handleChange} />
          </div>

          <div className="contact-field contact-field-message">
            <label htmlFor="message">{t.contact.message}</label>
            <textarea id="message" rows="5" value={form.message} onChange={handleChange} required />
          </div>

          <div className="contact-button-wrapper">
            <button className="contact-submit-button" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? t.contact.submitting : t.contact.submit}
            </button>

            {status === 'success' && (
              <p className="contact-form-status contact-form-status-success" role="status">
                {t.contact.success}
              </p>
            )}

            {status === 'error' && (
              <p className="contact-form-status contact-form-status-error" role="alert">
                {t.contact.error}
              </p>
            )}
          </div>
        </form>

      </div>

    </section>
  )
}
