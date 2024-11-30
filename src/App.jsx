import { HashRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Hero } from './cmps/Hero'
import './assets/styles/main.scss'

export function App() {
  return (
    <Router>
      <section className='app-main-layout'>
        <AppHeader />
        <Hero />
      </section>
    </Router>
  )
}

