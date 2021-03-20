import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Button from './button'
import device from '../utilities/device'

const Container = styled.div`
  position: relative;
  z-index: 0;

  /* Maintain a 3:4 aspect ratio if possible */
  @media ${device.xs} {
    min-height: calc(3 / 4 * (100vw - 6rem));
  }

  @media ${device.sm} {
    min-height: calc(3 / 4 * (100vw - 8rem) / 2);
  }

  @media ${device.md} {
    min-height: calc(3 / 4 * (100vw - 8rem) / 3);
  }
`

const Image = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Overlay = styled.div`
  padding: 3rem;
  height: 100%;
  transition: opacity 0.1s ease-in-out;
  background-color: white;
  display: flex;
  opacity: ${(props) => !props.show && 0};
  visibility: ${(props) => !props.show && 'hidden'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${Container}:hover & {
    visibility: initial;
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

export default function ProjectCard({
  image,
  title,
  description,
  url,
  active,
  onTouchStart,
}) {
  return (
    <Container onTouchStart={onTouchStart}>
      <Image image={getImage(image)} alt={title} />
      <Overlay show={active} onTouchStart={onTouchStart}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Link href={url} target='_blank' rel='noopener noreferrer' dark asLink>
          Check it out ↗
        </Link>
      </Overlay>
    </Container>
  )
}
