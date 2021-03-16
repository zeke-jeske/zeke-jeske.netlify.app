import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  background: var(--dark-color);
  color: var(--light-color);
  padding: 1.5rem 4rem;
  text-align: center;
`

export default function Footer() {
  return (
    <Container>
      <small>Copyright © {(new Date()).getFullYear()} Zeke Jeske. All Rights Reserved</small>
    </Container>
  )
}