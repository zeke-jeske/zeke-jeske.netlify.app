import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Button from './button'

const Container = styled.div`
  position: relative; // for position: absolute on image
  z-index: 0; // makes the image show up

  &::before {
    content: '';
    width: 0;
    height: 0;
    float: left;
    padding-top: 75%; // maintain 3:4 aspect ratio if possible
  }

  &::after {
    // to clear float
    content: '';
    display: table;
    clear: both;
  }
`

const Image = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; // prevents position: absolute from making this show up in front of the overlay
`

const Overlay = styled.div`
  padding: 2rem;
  height: 100%;
  transition: opacity 0.1s ease-in-out;
  background-color: white;
  display: flex;
  // props.show = when someone on mobile has tapped on the card
  opacity: ${(props) => !props.show && 0};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${Container}:hover & {
    opacity: 1;
  }
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 0.75rem;
  font-weight: normal;
`

const Description = styled.p`
  margin: 0;
`

const Link = styled(Button)`
  flex-shrink: 0;
  padding: 0.25rem 0.75rem;
  margin: 0.75rem 0 0;
`

export default function ProjectCard({ project, active, onTouchStart }) {
  return (
    <Container onTouchStart={onTouchStart}>
      <Image image={getImage(project.image)} alt={project.title} />
      <Overlay show={active} onTouchStart={onTouchStart}>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Link
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          dark
          asLink
        >
          Check it out ↗
        </Link>
      </Overlay>
    </Container>
  )
}
