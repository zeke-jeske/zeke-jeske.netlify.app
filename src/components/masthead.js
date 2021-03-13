import React from 'react'
import styled from 'styled-components'
import InView from 'react-intersection-observer'
import { StaticImage } from 'gatsby-plugin-image'
import ScrollDownButton from './scroll-down-button'

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

const ScrollObserver = styled.div`
  position: absolute;
  bottom: 0;
  top: calc(200vh - 1.5 * var(--header-height));
  z-index: -50;
`

export default function Masthead({ onScroll }) {
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
            position: 'absolute',
            zIndex: -1,
          }}
        />
        <hgroup>
          <FirstHeading>Hello! I'm <NameHighlight>Zeke Jeske</NameHighlight>.</FirstHeading>
          <SecondHeading>I'm a full-stack web developer.</SecondHeading>
        </hgroup>
        <ScrollDownButton>Check out my work ↓</ScrollDownButton>
      </Container>
      <InView>
        {({ inView, ref, entry }) => {
          onScroll(inView)
          return ( <ScrollObserver ref={ref} /> )
        }}
      </InView>
    </>
  )
}