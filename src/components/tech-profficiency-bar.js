import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--light-color);
  position: relative;
  margin-bottom: .5rem;
  display: flex;
  align-items: stretch;
  color: white;
  font-size: .875rem;
`

const DoneArea = styled.div`
  background-color: var(--primary-color);
  width: ${props => props.percent - 30}%;
  text-align: right;
  padding: .25rem 1rem;
`

const Label = styled.p`
  padding: .25rem 1rem;
  margin: 0;
  background-color: var(--secondary-color);
  width: 30%;
  text-align: center;
`

export default function TechProfficiencyBar({ name, percent }) {
  return (
    <Container>
      <Label>{ name }</Label>
      <DoneArea percent={percent}>{ percent }%</DoneArea>
    </Container>
  )
}