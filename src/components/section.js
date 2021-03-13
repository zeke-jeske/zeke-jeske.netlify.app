import React from 'react'
import styled from 'styled-components'
import Anchor from './anchor'

const Container = styled.section`
  padding: 4rem 4rem 0;
  margin: 0 auto;
  position: relative;
`

const Header = styled.header`
  margin-bottom: 1.5rem;
`

const Heading = styled.h1`
  font-size: 2.25rem;
`

export default function Section({ children, title, id }) {
  return (
    <Container>
      <Anchor id={id} />
      <Header>
        <Heading>{ title }</Heading>
      </Header>
      { children }
    </Container>
  )
}