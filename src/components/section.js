import React from 'react'
import styled from 'styled-components'
import device from '../utilities/device'

const Container = styled.section`
  position: relative;
  padding: 4rem;
  scroll-margin-top: var(--header-height);

  @media ${device.xs} {
    padding: 3rem;
  }
`

const Header = styled.header`
  margin-bottom: 1.5rem;
  text-align: center;
`

const Heading = styled.h2`
  font-weight: bold;
`

export default function Section({
  children,
  title,
  id,
  className,
  useH1 = false,
  as,
}) {
  return (
    <Container className={`${className} section`} id={id} as={as}>
      <Header>
        <Heading as={useH1 && 'h1'}>{title}</Heading>
      </Header>
      {children}
    </Container>
  )
}
