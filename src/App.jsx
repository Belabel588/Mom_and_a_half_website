import { HashRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Issue } from './cmps/Issue'
import { IssueStart } from './cmps/IssueStart'
import './assets/styles/main.scss'



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

    <Router>
      <section className='app-main-layout'>
        <AppHeader />
        <Hero />
        {/* <a className="app-header-main-link" href="#issue-section" onClick={handleScroll}>מתמודדים</a> */}
        <IssueStart />
        <Issue />

        <a href="#web-main-header">
          <img className={`logo-nav ${showNavLogo ? 'show' : ''}`} src="./images/nav-logo-pink.png" alt="logo navigation button" />
        </a>
      </section>
    </Router>
  )
}

