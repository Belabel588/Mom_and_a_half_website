import { useEffect, useState } from 'react'

/* Keep this in sync with the matching media query in AppHeader.scss:
   phones, plus tablets held vertically, get the hamburger instead of the full nav. */
const MOBILE_NAV_QUERY = '(max-width: 900px), (max-width: 1024px) and (orientation: portrait)'

/* The bar reads right to left. The desktop header splits these into two navs
   that sit either side of the logo, and the mobile menu lists them in order. */
const NAV_LINKS = [
  { href: '#about-section', label: 'קצת עליי' },
  { href: '#issue-section', label: 'למה בחרתי' },
  { href: '#issue-section-start', label: 'הורים מספרים' },
  { href: '#testimonials-section', label: 'מילים טובות' },
  { href: '#meetings-section', label: 'המפגשים' },
  { href: '#contact-section', label: 'צור קשר' },
]

const linksLeftOfLogo = [...NAV_LINKS.slice(3)].reverse()
const linksRightOfLogo = [...NAV_LINKS.slice(0, 3)].reverse()

export function AppHeader() {

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

  return (
    <header>
      <div id="web-main-header">


        <div className="app-header-nav-group">
          <nav className="app-header-main-nav">
            {linksLeftOfLogo.map(link => (
              <a className="app-header-main-link" key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>


        <div className="main-header-logo">
          <img className="main-header-logo-img"
            src="./images/logo-pink-nobcg.png"
            alt="mom and a half logo" />
        </div>


        <div className="app-header-nav-group">
          <nav className="app-header-main-nav">
            {linksRightOfLogo.map(link => (
              <a className="app-header-main-link" key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>


        <button className={`app-header-hamburger ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen(isOpen => !isOpen)}
          aria-label={isMenuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={isMenuOpen}
          aria-controls="app-header-mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>


        <nav id="app-header-mobile-menu"
          className={`app-header-mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a className="app-header-mobile-link"
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}>{link.label}</a>
          ))}
        </nav>


      </div>

      {isMenuOpen && (
        <div className="app-header-menu-backdrop" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  )
}
