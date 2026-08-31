import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { AccessibilityMenu } from './AccessibilityMenu'

/* Keep this in sync with the matching media query in AppHeader.scss:
   phones, plus tablets held vertically, get the hamburger instead of the full nav. */
const MOBILE_NAV_QUERY = '(max-width: 900px), (max-width: 1024px) and (orientation: portrait)'

/* Section order as a visitor meets them. Labels come from the language file;
   only the hrefs and the key live here. */
const NAV_ITEMS = [
  { href: '#about-section', key: 'about' },
  { href: '#issue-section', key: 'why' },
  { href: '#issue-section-start', key: 'parents' },
  { href: '#testimonials-section', key: 'testimonials' },
  { href: '#meetings-section', key: 'meetings' },
  { href: '#contact-section', key: 'contact' },
]

export function AppHeader() {
  const { t, isHebrew, toggleLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(ev) {
      if (ev.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.documentElement.style.overflow = ''
    }
  }, [isMenuOpen])

  // Rotating a tablet back to landscape brings the full nav back, so drop the panel with it.
  useEffect(() => {
    const mobileNav = window.matchMedia(MOBILE_NAV_QUERY)

    function handleChange(ev) {
      if (!ev.matches) setIsMenuOpen(false)
    }

    mobileNav.addEventListener('change', handleChange)
    return () => mobileNav.removeEventListener('change', handleChange)
  }, [])

  /* The bar reads outward from the logo. In Hebrew that means the first items
     sit to its right, so each half is reversed; in English the halves swap and
     read left to right instead. */
  const firstHalf = NAV_ITEMS.slice(0, 3)
  const secondHalf = NAV_ITEMS.slice(3)
  const leftOfLogo = isHebrew ? [...secondHalf].reverse() : firstHalf
  const rightOfLogo = isHebrew ? [...firstHalf].reverse() : secondHalf

  return (
    <header>
      <div id="web-main-header">

        {/* Language and accessibility live together as one small utility cluster
            in the bar, rather than floating over the page. The cluster is the
            positioning context for the accessibility panel, which drops beneath
            it only while open. */}
        <div className="header-utilities">
          <button className="lang-toggle"
            onClick={toggleLanguage}
            lang={isHebrew ? 'en' : 'he'}
            aria-label={t.switchTo}>
            {isHebrew ? 'EN' : 'עב'}
          </button>

          <AccessibilityMenu />
        </div>

        <div className="app-header-nav-group">
          <nav className="app-header-main-nav" aria-label={t.nav.about}>
            {leftOfLogo.map(link => (
              <a className="app-header-main-link" key={link.key} href={link.href}>{t.nav[link.key]}</a>
            ))}
          </nav>
        </div>

        <div className="main-header-logo">
          <img className="main-header-logo-img"
            src="./images/logo-pink-nobcg.png"
            alt={t.nav.logoAlt} />
        </div>

        <div className="app-header-nav-group">
          <nav className="app-header-main-nav">
            {rightOfLogo.map(link => (
              <a className="app-header-main-link" key={link.key} href={link.href}>{t.nav[link.key]}</a>
            ))}
          </nav>
        </div>

        <button className={`app-header-hamburger ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen(isOpen => !isOpen)}
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isMenuOpen}
          aria-controls="app-header-mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="app-header-mobile-menu"
          className={`app-header-mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map(link => (
            <a className="app-header-mobile-link"
              key={link.key}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}>{t.nav[link.key]}</a>
          ))}
        </nav>

      </div>

      {isMenuOpen && (
        <div className="app-header-menu-backdrop" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  )
}
