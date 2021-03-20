import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  margin: 1.5rem 0;
  padding: 0.75rem 1rem;
  border: 2px solid var(--${ props => props.color }-color);
  position: relative;
  font-size: 1.125rem;
  overflow: hidden;
  background-color: transparent;
  transition: color, background-color, box-shadow .2s ease-in-out;
  text-decoration: none;
  color: var(--${ props => props.color }-color);
  
  &:hover {
    background-color: var(--${props => props.color}-color);
    color: var(--${ props => props.textColor }-color);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px var(--outline-color);
  }
`

export default function Button({ dark = false, asLink = false, children, ...props }) {
  return (
    <Btn
      color={ dark ? 'dark' : 'light' }
      textColor={ dark ? 'light' : 'dark' }
      as={ asLink && 'a' }
      {...props}
    >
      { children }
    </Btn>
  )
}