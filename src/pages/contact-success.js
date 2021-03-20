import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ResponsiveContainer from '../components/responsive-container'
import { Link } from 'gatsby'

const Main = styled.main`
  padding: 4rem;
  padding-top: calc(4rem + var(--header-height));
  min-height: calc(100vh - var(--footer-height));
`

const Heading = styled.h1`
  font-weight: bold;
`

export default function ContactSuccess() {
  return (
    <Layout>
      <Main>
        <ResponsiveContainer>
          <Heading>Message sent successfully!</Heading>
          <p>I will try to get back to you within the next few days.</p>
          <Link to='/'>Return to website</Link>
        </ResponsiveContainer>
      </Main>
    </Layout>
  )
}
