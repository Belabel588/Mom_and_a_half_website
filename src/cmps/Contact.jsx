import { useState } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../context/LanguageContext'

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sarit_halfon_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/sarit.halfon3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5h-2a2 2 0 0 0-2 2V21" />
        <path d="M8.5 13.5h5" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@sarit_halfon_?is_from_webapp=1&sender_device=pc',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 3c.3 1.9 1.6 3.4 3.5 3.8v2.8c-1.3 0-2.5-.4-3.5-1.1v6.4a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.05v2.9a2.7 2.7 0 1 0 1.9 2.6V3h2.8z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    /* Percent-encoded: the handle is Hebrew, and the raw form breaks once the
       URL is copied into anything that is not a browser address bar. */
    href: 'https://www.youtube.com/@%D7%A9%D7%A8%D7%99%D7%AA%D7%97%D7%9C%D7%A4%D7%95%D7%9F%D7%94%D7%93%D7%A8%D7%9B%D7%AA%D7%94%D7%95%D7%A8%D7%99%D7%9D',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <rect x="2.5" y="5" width="19" height="14" rx="4.5" />
        <path d="M10.5 9.2v5.6l4.6-2.8z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

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

          <div className="contact-social-links">
            {SOCIAL_LINKS.map(social => (
              <a className="contact-social-link"
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}>
                {social.icon}
              </a>
            ))}
          </div>

        </form>

      </div>

    </section>
  )
}
