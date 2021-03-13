import React, { useState } from 'react'
import Section from '../components/section'
import Layout from '../components/layout'
import Masthead from '../components/masthead'
import Main from '../components/main'
import About from '../components/about'
import Portfolio from '../components/portfolio'

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <Layout showHeader={showHeader}>
      <Masthead onScroll={setShowHeader} />
      <Main>
        <About />
        <Portfolio />
        <Section id='contact' title='Contact'>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </Section>
      </Main>
    </Layout>
  )
}
