import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import device from '../utilities/device'
import { StaticImage } from 'gatsby-plugin-image'

const GlobalStyle = createGlobalStyle`
  body {
    /* Prevent scrolling when mobile navigation is open */
    overflow: ${props => props.showNav && 'hidden'};
  }
`

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 25;
  height: var(--header-height);
  background-color: var(--secondary-color);
  border-bottom: 3px solid var(--accent-color);

  @media ${device.lg} {
    z-index: 10; /* Behind masthead */
  }
`

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  min-height: var(--header-height);
  width: 100vw;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 2rem;
  color: var(--light-color);
`

const Navigation = styled.div`
  @media ${device.xs} {
    position: absolute;
    background: var(--secondary-color);
    opacity: .95;
    width: 100%;
    top: var(--header-height);
    left: 0;
    overflow: hidden;
    transition: height .2s ease-in-out;
    height: ${props => props.showMobile ? 'calc(100vh - var(--header-height))' : 0};
  }
`

const NavInner = styled.nav`
  display: flex;
  height: 100%;

  @media ${device.xs} {
    flex-direction: column;
    height: calc(100vh - var(--header-height));
    padding: 2rem 0;
  }

  @media ${device.sm} {
    align-items: center;
  }
`

const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: inherit;
  text-decoration: none;
`

const NavLink = styled(HeaderLink)`
  transition: background .2s ease-in-out;
  padding: .5rem 1rem;

  &:hover {
    background: var(--primary-2-color);
  }

  &:active {
    background: var(--primary-color);
  }

  @media ${device.xs} {
    display: block;
    text-align: center;
    margin-bottom: .5rem;
  }

  @media ${device.sm} {
    margin-left: .5rem;
  }
`

const SiteTitle = styled.h1`
  margin: 0;
  display: flex;
`

const ToggleMenuBtn = styled.button`
  height: calc(.5 * var(--header-height));
  padding: .5rem;
  background: transparent;
  border: none;
  margin: 1rem;
  color: inherit;
  transition: background .1s ease-in-out;
  border-radius: 2px;
  
  &:hover {
    background: var(--primary-color);
  }

  @media ${device.sm} {
    display: none;
  }
`

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const hideNav = () => setShowNav(false);
  const toggleNav = () => setShowNav(!showNav)

  return (
    <>
      <GlobalStyle showNav={showNav} />
      <Background />
      <Container>
        <SiteTitle><HeaderLink to='/#home'>Zeke Jeske</HeaderLink></SiteTitle>
        <ToggleMenuBtn onClick={toggleNav} aria-hidden>
          <StaticImage
            src='../images/menu-icon.svg'
            alt='Menu'
          />
        </ToggleMenuBtn>
        <Navigation showMobile={showNav}>
          <NavInner>
            <NavLink to='/#about' onClick={hideNav}>
              About
            </NavLink>
            <NavLink to='/#portfolio' onClick={hideNav}>
              Portfolio
            </NavLink>
            <NavLink to='/#contact' onClick={hideNav}>
              Contact
            </NavLink>
          </NavInner>
        </Navigation>
      </Container>
    </>
  )
}