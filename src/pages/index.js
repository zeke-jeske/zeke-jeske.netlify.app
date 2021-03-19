import React from 'react'
import Layout from '../components/layout'
import Masthead from '../components/masthead'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'

export default function Home() {
  return (
    <Layout>
      <Masthead />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
    </Layout>
  )
}
