import { HashRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { IssueStart } from './cmps/IssueStart'
import { Meetings } from './cmps/Meetings'
import { About } from './cmps/About'
import { Issue } from './cmps/Issue'
import { Testimonials } from './cmps/Testimonials'
import { Contact } from './cmps/Contact'
import './assets/styles/main.scss'

export function App() {
  const [showNavLogo, setNavLogo] = useState(false)

  useEffect(() => {
    const observedSection = document.getElementById('hero-section')
    if (!observedSection) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setNavLogo(false)
        } else {
          setNavLogo(true)
        }
      })
    }, { threshold: 0.1 })

    observer.observe(observedSection)

    return () => {
      observer.unobserve(observedSection)
    }
  }, [])

  return (

    <section className='app-main-layout'>
      <Router>
        <AppHeader />

        {/* Sections run in the order a visitor should meet them: the promise,
            then what they're dealing with, then the service, then who Sarit is,
            why she does this, social proof, and finally the invitation. */}
        <div id="hero-section">
          <Hero />
        </div>

        <IssueStart />
        <Meetings />
        <About />
        <Issue />
        <Testimonials />
        <Contact />

        <a href="#web-main-header">
          <img className={`logo-nav ${showNavLogo ? 'show' : ''}`} src="./images/nav-logo-pink.png" alt=" לוגו ניווט לתחילת הדף" />
        </a>
      </Router>
    </section >

  )
}
