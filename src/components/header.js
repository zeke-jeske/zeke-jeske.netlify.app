import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10;
  height: var(--header-height);
  background-color: var(--secondary-color);
  border-bottom: 3px solid var(--accent-color);
`

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: var(--header-height);
  width: 100vw;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 2rem;
  color: var(--light-color);
`

const Navigation = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: inherit;
  text-decoration: none;
`

const SiteTitle = styled.h1`
  margin: 0;
  display: flex;
`

export default function Header({ show }) {
  return (
    <>
      <Background />
      <Container>
        <SiteTitle><NavLink to='/#home'>Zeke Jeske</NavLink></SiteTitle>
        <Navigation>
          <NavLink to='/#about'>
            <span>About</span>
          </NavLink>
          <NavLink to='/#portfolio'>
            <span>Portfolio</span>
          </NavLink>
          <NavLink to='/#contact'>
            <span>Contact</span>
          </NavLink>
        </Navigation>
      </Container>
    </>
  )
}