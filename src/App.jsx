import { HashRouter as Router } from 'react-router-dom'

import { useState } from 'react'
// import './main.css'
import { AppHeader } from './cmps/AppHeader'

export function App() {
  return <Router>
    <section>
      <AppHeader />
    </section>
  </Router>
}

