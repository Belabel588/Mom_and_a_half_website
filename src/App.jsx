import { HashRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import { Issue } from './cmps/Issue'
import './assets/styles/main.scss'

export function App() {

  return (

    <Router>
      <section className='app-main-layout'>
        <AppHeader />
        <Hero />
        {/* <a className="app-header-main-link" href="#issue-section" onClick={handleScroll}>מתמודדים</a> */}
        <Issue />
      </section>
    </Router>
  )
}

