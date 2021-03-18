import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  padding: 4rem;
  margin: 0 auto;
  position: relative;
  overflow: auto;
  scroll-margin-top: var(--header-height);
`

const Header = styled.header`
  margin-bottom: 1.5rem;
  text-align: center;
`

const Heading = styled.h2`
  font-weight: bold;
`

export default function Section({ children, title, id, className, useH1 = false }) {
  return (
    <Container className={className} id={id}>
      <Header>
        <Heading as={useH1 && 'h1'}>{ title }</Heading>
      </Header>
      { children }
    </Container>
  )
}