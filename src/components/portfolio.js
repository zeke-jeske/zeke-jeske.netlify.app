import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectCard from './project-card'
import Section from './section'
import device from '../utilities/device'
import Container from './responsive-container'

const StyledSection = styled(Section)`
  background-color: var(--light-color);
`

const GridContainer = styled(Container)`
  display: grid;

  @media ${device.xs} {
    grid-template-columns: 1fr;
  }

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media ${device.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default function Portfolio() {
  const [activeProj, setActiveProj] = useState('');
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            title
            description
            id
            url
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledSection id='portfolio' title='Portfolio'>
      <GridContainer className='container'>
        {data.allProjectsJson.edges.map(({
          node: {
            id,
            ...props
          }
        }) => {
          const active = id === activeProj;
          return (
            <ProjectCard
              key={id}
              active={active}
              onTouchStart={event => setActiveProj(active ? '' : id)}
              {...props}
            />
          )
        })}
      </GridContainer>
    </StyledSection>
  )
}