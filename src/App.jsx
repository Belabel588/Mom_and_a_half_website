import { HashRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Issue } from './cmps/Issue'
import { IssueStart } from './cmps/IssueStart'
import './assets/styles/main.scss'
import './cmps/About'
import { About } from './cmps/About'



export function App() {
  const [showNavLogo, setNavLogo] = useState(true)

  useEffect(() => {
    const observedSection = document.getElementById('issue-section-start')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setNavLogo(showNavLogo)
        } else {
          setNavLogo(!showNavLogo)
        }
      }, { threshold: 1 })
      // console.log(entries)

    })

    observer.observe(observedSection)
  })

  return (



    <section className='app-main-layout'>
      <Router>
        <AppHeader />
        <Hero />
        {/* <a className="app-header-main-link" href="#issue-section" onClick={handleScroll}>מתמודדים</a> */}
        <IssueStart />
        <Issue />
        <About />

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

