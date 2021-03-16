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
    query ProjectMDX {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              description
              image {
                childImageSharp {
                  gatsbyImageData(width: 400)
                }
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
        {data.allMdx.edges.map(({ node }) => (
          <ProjectCard
            key={node.id}
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
          />
        ))}
      </GridContainer>
    </StyledSection>
  )
}