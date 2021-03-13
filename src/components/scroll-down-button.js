import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  margin: 1.5rem;
  padding: 0.75rem 1rem;
  border: 2px solid white;
  position: relative;
  font-size: 1.125rem;
  overflow: hidden;
  transition: color, background-color .2s ease-in-out;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    background: var(--light-color);
    color: var(--dark-color);
  }
`

export default function ScrollDownButton({ children }) {
  return (
    <Link href='/#about'>
      { children }
    </Link>
  )
}