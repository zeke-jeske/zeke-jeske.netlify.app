import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: var(--header-height);
  width: 100vw;
  padding: 0 2rem;
  z-index: 20;
  color: var(--light-color);
  position: fixed;
  background-color: ${props => props.show ? 'var(--secondary-color)' : 'transparent'};
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
    <Container show={show}>
      <SiteTitle><NavLink to='/#masthead'>Zeke Jeske</NavLink></SiteTitle>
      <Navigation>
        <NavLink to='/#about'>
          <span>About</span>
        </NavLink>
        <NavLink to='/#contact'>
          <span>Contact</span>
        </NavLink>
      </Navigation>
    </Container>
  )
}