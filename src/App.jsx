import { HashRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Issue } from './cmps/Issue'
import { IssueStart } from './cmps/IssueStart'
import './assets/styles/main.scss'
import './cmps/About'
import { About } from './cmps/About'
import { Contact } from './cmps/Contact'



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
        <div id="hero-section">
          <Hero />
          <About />
        </div>
        <Issue />
        {/* <a className="app-header-main-link" href="#issue-section" onClick={handleScroll}>מתמודדים</a> */}
        <IssueStart />
        <Contact />

        <a href="#web-main-header">
          <img className={`logo-nav ${showNavLogo ? 'show' : ''}`} src="./images/nav-logo-pink.png" alt=" לוגו ניווט לתחילת הדף" />
        </a>
      </Router>


      {/* <div className='mobile-nav'>

        <div className='mobile-nav-link-container'>
          <img className='mobile-nav-logo' src="./images/nav-logo-pink.png" alt="לוגו ניווט לצור קשר" />
          <a className="app-header-main-link" href="#">צור קשר</a>
        </div>

        <div className='mobile-nav-link-container'>
          <img className='mobile-nav-logo' src="./images/nav-logo-pink.png" alt="לוגו ניווט לאני מאמין" />
          <a className="app-header-main-link" href="#">אני מאמין</a>

        </div>
        <div className='mobile-nav-link-container'>
          <img className='mobile-nav-logo' src="./images/nav-logo-pink.png" alt="לוגו ניווט לקצת עליי" />
          <a className="app-header-main-link" href="#">קצת עליי</a>
        </div>

        <div className='mobile-nav-link-container'>
          <img className='mobile-nav-logo' src="./images/nav-logo-pink.png" alt="לוגו ניווט למפגשים" />
          <a className="app-header-main-link" href="#">המפגשים</a>
        </div>



        <div className='mobile-nav-link-container'>
          <img className='mobile-nav-logo' src="./images/nav-logo-pink.png" alt="לוגו ניווט להמלצות" />
          <a className="app-header-main-link" href="#">המלצות</a>
        </div>


        <div className='mobile-nav-link-container'>
          <img className='mobile-nav-logo' src="./images/nav-logo-pink.png" alt="לוגו ניווט למתמודדים" />
          <a className="app-header-main-link" href="#issue-section-start">מתמודדים</a>
        </div>



      </div> */}


    </section >

  )
}

