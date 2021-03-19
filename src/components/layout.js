import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import '@fontsource/open-sans'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/300.css'

import SEO from './seo'
import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --accent-color: #FF304F;
    --primary-color: #0073CE;
    --secondary-color: #07203E;
    --dark-color: #202322;
    --light-color: #e8e8e0;
    
    --header-height: 4rem;

    line-height: 1.5;
    font-weight: lighter;
    scroll-behavior: smooth;

    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
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
`

const Container = styled.div`
  color: var(--dark-color);
  font-family: "Open Sans";
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

        { children }

        <Footer />
      </Container>
    </>
  )
}