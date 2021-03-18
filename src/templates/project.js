import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PageLayout from '../layouts/page'

export default function Project({ data }) {
  const { title, description, image } = data.projectsJson
  return (
    <PageLayout title={ title }>
      <p>{ description }</p>
      <GatsbyImage image={ getImage(image) } alt={ title } />
    </PageLayout>
  )
}

export const query = graphql`
  query {
    projectsJson(id: {eq: "31bb2c69-4724-5894-8915-582fcb0e1cf4"}) {
      title
      description
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`