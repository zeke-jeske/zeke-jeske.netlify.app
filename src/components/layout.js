import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import '@fontsource/open-sans'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/300.css'

import SEO from './seo'
import Header from './header'
import Footer from './footer'
import device from '../utilities/device'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --accent-color: #FF304F;
    --primary-blue: #0073CE;
    --medium-blue: #0C64AE;
    --dark-blue: #07203E;
    --outline-color: #47abe187;
    --dark-color: #202322;
    --light-color: #e8e8e0;
    
    --header-height: 4rem;
    --footer-height: 4.5rem;

    line-height: 1.5;
    font-weight: lighter;
    scroll-behavior: smooth;

    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    @media ${device.xs} {
      font-size: 85%;
    }
  }

  * {
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: inherit;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  button:focus, a:focus {
    outline: 1px dotted;
  }
`

const Container = styled.div`
  color: var(--dark-color);
  font-family: 'Open Sans';
  position: relative;
  min-height: 100vh;
`

export default function Layout({ children, title }) {
  return (
    <>
      <SEO title={title} />
      <GlobalStyle />
      <Container>
        <title>Zeke Jeske</title>
        <Header />

        {children}

        <Footer />
      </Container>
    </>
  )
}
