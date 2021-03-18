import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectCard from './project-card'
import Section from './section'
import device from '../utilities/device'
import Container from './container'

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
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            title
            description
            id
            fields {
              slug
            }
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
            fields: { slug },
            ...props
          }
        }) => (
          <ProjectCard
            key={id}
            slug={slug}
            {...props}
          />
        ))}
      </GridContainer>
    </StyledSection>
  )
}