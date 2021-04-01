import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectCard from './project-card'
import Section from './section'
import device from '../utilities/device'

const StyledSection = styled(Section)`
  background-color: var(--light-color);
`

const GridContainer = styled.div`
  display: grid;
  max-width: 1000px;
  margin: 0 auto;

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
  const [activeProj, setActiveProj] = useState('')
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson(sort: { fields: date, order: DESC }) {
        edges {
          node {
            date
            id
            description
            url
            title
            image {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.3333)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledSection id='portfolio' title='Portfolio'>
      <GridContainer>
        {data.allProjectsJson.edges.map(({ node: { id, ...project } }) => {
          const active = id === activeProj
          return (
            <ProjectCard
              key={id}
              active={active}
              onTouchStart={(event) => setActiveProj(active ? '' : id)}
              project={project}
            />
          )
        })}
      </GridContainer>
    </StyledSection>
  )
}
