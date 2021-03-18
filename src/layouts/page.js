import React from 'react'
import styled from 'styled-components'
import Layout from './default'
import Container from '../components/responsive-container'

const Main = styled.main`
  padding: 4rem;
  scroll-margin-top: var(--header-height);
  margin: 0 auto;
`

const Title = styled.h1`
  font-weight: bold;
`

export default function PageLayout({ title, children }) {
  return (
    <Layout>
      <Main>
        <Title>{ title }</Title>
        <Container>
          { children }
        </Container>
      </Main>
    </Layout>
  )
}