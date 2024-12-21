import { HashRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Issue } from './cmps/Issue'
import { IssueStart } from './cmps/IssueStart'
import './assets/styles/main.scss'

export function App() {

  return (

    <Router>
      <section className='app-main-layout'>
        <AppHeader />
        <Hero />
        {/* <a className="app-header-main-link" href="#issue-section" onClick={handleScroll}>מתמודדים</a> */}
        <IssueStart />
        <Issue />

        <img className='logo-nav' src="./images/nav-logo-pink.png" alt="logo navigation button" />
      </section>
    </Router>
  )
}

