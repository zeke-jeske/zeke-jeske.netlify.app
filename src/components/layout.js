import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import SEO from './seo'

import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --primary-color: #40ff95;
    --secondary-color: #282828;
    --dark-color: #202322;
    --light-color: #fff;
    
    --header-height: 4rem;

    scroll-behavior: smooth;

    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  color: var(--dark-color);
  font-family: "Open Sans";
  position: relative;
  min-height: 100vh;
`

export default function Layout({ children, showHeader = true, title }) {
  return (
    <>
      <SEO title={title} />
      <GlobalStyle />
      <Container>
        <title>Zeke Jeske</title>
        <Header show={showHeader} />

        { children }

        <Footer />
      </Container>
    </>
  )
}