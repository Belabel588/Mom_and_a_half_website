import { useState } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

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
]

const EMPTY_FORM = { firstName: '', lastName: '', email: '', phone: '', message: '' }

// Formspree is the live submission path — see server/ for the custom Express
// backend, kept in the repo but not wired up for now.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzepjoyy'

export function Contact() {
  const [ref, isVisible] = useRevealOnScroll()
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
        body: JSON.stringify({ ...form, _subject: `פנייה חדשה מהאתר – ${form.firstName} ${form.lastName}` }),
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
            <img className="contact-section-logo" src="./images/logo-pink-nobcg.png" alt="לוגו אמא וחצי" />

            <h3 className="contact-section-header">
              צרו קשר
            </h3>

            <p className="contact-section-text">
              יש לכם שאלה, התלבטות או פשוט רוצים לדבר?
              <br />
              השאירו פרטים ואחזור אליכם בהקדם.
            </p>
          </div>

          <div className="contact-field">
            <label htmlFor="firstName">שם פרטי</label>
            <input id="firstName" type="text" value={form.firstName} onChange={handleChange} required />
          </div>

          <div className="contact-field">
            <label htmlFor="lastName">שם משפחה</label>
            <input id="lastName" type="text" value={form.lastName} onChange={handleChange} required />
          </div>

          <div className="contact-field">
            <label htmlFor="email">אימייל</label>
            <input id="email" type="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="contact-field">
            <label htmlFor="phone">טלפון</label>
            <input id="phone" type="tel" value={form.phone} onChange={handleChange} />
          </div>

          <div className="contact-field contact-field-message">
            <label htmlFor="message">הודעה</label>
            <textarea id="message" rows="5" value={form.message} onChange={handleChange} required />
          </div>

          <div className="contact-button-wrapper">
            <button className="contact-submit-button" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'שולח...' : 'שליחה'}
            </button>

            {status === 'success' && (
              <p className="contact-form-status contact-form-status-success" role="status">
                ההודעה נשלחה בהצלחה, נחזור אליכם בהקדם!
              </p>
            )}

            {status === 'error' && (
              <p className="contact-form-status contact-form-status-error" role="alert">
                משהו השתבש בשליחה, נסו שוב מאוחר יותר.
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
