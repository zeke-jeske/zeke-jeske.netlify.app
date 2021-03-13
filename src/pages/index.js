import React, { useState } from 'react'
import Section from '../components/section'
import Layout from '../components/layout'
import Masthead from '../components/masthead'
import Main from '../components/main'

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <Layout showHeader={showHeader}>
      <Masthead onScroll={setShowHeader} />
      <Main>
        <Section id='about' title='About'>
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
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </Section>
        <Section id='portfolio' title='Porfolio'>
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
