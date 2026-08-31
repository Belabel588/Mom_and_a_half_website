import { HashRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { IssueStart } from './cmps/IssueStart'
import { Meetings } from './cmps/Meetings'
import { About } from './cmps/About'
import { Issue } from './cmps/Issue'
import { Testimonials } from './cmps/Testimonials'
import { Contact } from './cmps/Contact'
import './assets/styles/main.scss'

/* Split out from App so it can call useLanguage — a component cannot consume a
   context that it is itself providing. */
function Page() {
  const { t } = useLanguage()
  const [showNavLogo, setNavLogo] = useState(false)

  useEffect(() => {
    const observedSection = document.getElementById('hero-section')
    if (!observedSection) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setNavLogo(!entry.isIntersecting)
      })
    }, { threshold: 0.1 })

    observer.observe(observedSection)
    return () => observer.unobserve(observedSection)
  }, [])

  return (
    <section className='app-main-layout'>
      <Router>
        <a className="skip-link" href="#main-content">{t.a11y.skipToContent}</a>

        <AppHeader />

        {/* Sections run in the order a visitor should meet them: the promise,
            then what they're dealing with, then the service, then who Sarit is,
            why she does this, social proof, and finally the invitation. */}
        <main id="main-content">
          <div id="hero-section">
            <Hero />
          </div>

          <IssueStart />
          <Meetings />
          <About />
          <Issue />
          <Testimonials />
          <Contact />
        </main>

        {/* The accessibility control lives in AppHeader, not here — see the
            utility cluster there. This back-to-top logo is the one thing that
            stays floating, since its whole job is to be reachable mid-page. */}
        <a href="#web-main-header" aria-label={t.nav.backToTop}>
          <img className={`logo-nav ${showNavLogo ? 'show' : ''}`}
            src="./images/nav-logo-pink.png"
            alt={t.nav.backToTop} />
        </a>
      </Router>
    </section >
  )
}

export function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
