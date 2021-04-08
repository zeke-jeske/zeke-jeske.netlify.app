import React from 'react'
import styled from 'styled-components'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import Section from './section'
import ResponsiveContainer from './responsive-container'
import device from '../utilities/device'
import { graphql, useStaticQuery } from 'gatsby'

const StyledSection = styled(Section)`
  /* Ensures that the masthead is not at all in view when a #about anchor link is clicked */
  scroll-margin-top: 0;
`

const FlexContainer = styled(ResponsiveContainer)`
  display: flex;
  flex-direction: column;

  @media ${device.md} {
    flex-direction: row;
  }
`

const Column = styled.div`
  flex-basis: 0;
  text-align: center;

  @media ${device.sm} {
    padding: 0 3rem;
  }
`

const Left = styled(Column)`
  flex: 2;
`

const Right = styled(Column)`
  flex: 3;
`

const Logo = styled(GatsbyImage)`
  height: 2rem;
  margin: 0.5rem 0.75rem;

  @media ${device.md} {
    margin: 0.75rem 1.5rem;
  }
`

export default function About() {
  const {
    allFile: { edges: logos },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
        edges {
          node {
            name
            id
            childImageSharp {
              gatsbyImageData(
                transformOptions: { grayscale: false }
                height: 32
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)

  return (
    <StyledSection id='about' title='About Me'>
      <FlexContainer>
        <Left>
          <h3>Who I am</h3>
          <StaticImage
            src='../images/head-shot.jpg'
            alt='Zeke'
            width={512}
            height={512}
            style={{
              borderRadius: '50%',
              maxWidth: '256px',
            }}
          />
          <p>
            I'm a full-stack web developer and high school student from Madison,
            WI. I build fast, responsive, and accessible websites using tools
            like Wordpress and Gatsby.
          </p>
        </Left>
        <Right>
          <h3>What I know</h3>
          {logos.map(({ node }) => (
            <Logo
              key={node.id}
              image={getImage(node)}
              alt={node.name}
              objectFit='contain'
            />
          ))}
        </Right>
      </FlexContainer>
    </StyledSection>
  )
}
