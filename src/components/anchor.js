import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  display: block;
  position: absolute;
  bottom: var(--header-height);
  width: 0;
  height: 0;
  top: 0;
  left: 0;
`

export default function Anchor({ id }) {
  return (
    <Span id={id} />
  )
}