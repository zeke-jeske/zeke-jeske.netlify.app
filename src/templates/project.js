import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout.js'
import styled from 'styled-components'

const Main = styled.main`
  padding: 4rem;
`

export default function Project({ data }) {
  const { title, description, image } = data.projectsJson
  return (
    <Layout>
      <Main>
        <h1>{ title }</h1>
        <p>{ description }</p>
        <GatsbyImage image={ getImage(image) } alt={ title } />
      </Main>
    </Layout>
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