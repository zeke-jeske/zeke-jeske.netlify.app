import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Button from './button'

const Container = styled.div`
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem;
  transition: opacity .2s ease-in-out;
  background-color: white;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    opacity: 1;
  }
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 .75rem;
  font-weight: normal;
`

const Description = styled.p`
  margin: 0;
`

const Link = styled(Button)`
  flex-shrink: 0;
  padding: .25rem .75rem;
  margin: .75rem 0 0;
`

export default function ProjectCard({ image, title, description, url }) {
  return (
    <Container>
      <GatsbyImage image={ getImage(image) } alt={ title } />
      <Overlay>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
        <Link href={ url } target='_blank' dark asLink>Check it out ↗</Link>
      </Overlay>
    </Container>
  )
}
