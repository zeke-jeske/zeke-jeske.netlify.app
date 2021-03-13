import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import ProjectCard from './project-card'
import Section from './section'

const StyledSection = styled(Section)`
  background-color: var(--light-color);
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
      <Container>
        {data.allMdx.edges.map(({ node }) => (
          <ProjectCard
            key={node.id}
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
          />
        ))}
      </Container>
    </StyledSection>
  )
}