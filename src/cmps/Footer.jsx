import { useLanguage } from '../context/LanguageContext'

/* Moved here from the contact form: a green closing band is where visitors
   expect to find links and credits, and it takes that job off the form, which
   was carrying the icons under its submit button. */
export const SOCIAL_LINKS = [
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

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer" dir={t.dir}>
      <div className="site-footer-inner">

        <div className="site-footer-social">
          <p className="site-footer-social-label">{t.footer.follow}</p>
          <div className="site-footer-social-row">
            {SOCIAL_LINKS.map(social => (
              <a className="site-footer-social-link"
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="site-footer-base">
        <p className="site-footer-rights">{t.footer.rights}</p>

        {/* Names in full, and shown in whichever language the site is set to. */}
        <p className="site-footer-credits">
          {t.credits.map((item, i) => (
            <span className="site-footer-credit" key={item.name}>
              {i > 0 && <span className="site-footer-sep" aria-hidden="true">•</span>}
              <span className="site-footer-role">{item.role}</span>
              <span className="site-footer-name">{item.name}</span>
            </span>
          ))}
        </p>
      </div>
    </footer>
  )
}
