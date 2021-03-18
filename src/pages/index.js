import React, { useState } from 'react'
import Layout from '../layouts/default'
import Masthead from '../components/masthead'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <Layout showHeader={showHeader}>
      <Masthead onScroll={setShowHeader} />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
    </Layout>
  )
}
