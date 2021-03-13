import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: calc(var(--header-height) * -1);
  left: 0;
`

export default function Anchor({ id }) {
  return (
    <Span id={id} />
  )
}