import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

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
  text-align: center;

  &:hover {
    opacity: 1;
  }
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: .5rem;
  font-weight: normal;
`

export default function ProjectCard({ image, title, description, slug }) {
  return (
    <Container>
      <GatsbyImage image={ getImage(image) } alt={ title } />
      <Overlay>
        <Title>{ title }</Title>
        <p>{ description }</p>
        <Link to={ slug }>View details</Link>
      </Overlay>
    </Container>
  )
}
