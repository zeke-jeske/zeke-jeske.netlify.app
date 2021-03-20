import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Button from './button'
import device from '../utilities/device'

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: white;
  padding: 3rem;
  padding-top: var(--header-height);

  @media ${device.lg} {
    padding-top: 0;
  }
`

const FirstHeading = styled.h1`
  font-size: 3rem;
  margin: 1rem;
`

const SecondHeading = styled.h2`
  font-size: 3rem;
  margin: 1rem;
`

const NameHighlight = styled.span`
  color: var(--accent-color);
  font-weight: normal;
`

export default function Masthead() {
  return (
    <>
      <Container id='home'>
        <StaticImage
          src='../images/hero.webp'
          alt='Blurred code'
          loading='eager'
          style={{
            width: '100%',
            height: '100%',
            top: 0,
            position: 'absolute',
            zIndex: -1,
          }}
        />
        <hgroup>
          <FirstHeading>
            Hello! I'm <NameHighlight>Zeke Jeske</NameHighlight>.
          </FirstHeading>
          <SecondHeading>I'm a front-end web developer.</SecondHeading>
        </hgroup>
        <Button asLink href='#about'>
          Check out my work ↓
        </Button>
      </Container>
    </>
  )
}
