import React from 'react'
import styled from 'styled-components'
import Anchor from './anchor'

const Container = styled.section`
  padding: 4rem 4rem 0;
  margin: 0 auto;
  position: relative;
  overflow: auto;
`

const Header = styled.header`
  margin-bottom: 1.5rem;
  text-align: center;
`

const Heading = styled.h2`
  font-weight: bold;
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