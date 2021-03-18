import React from 'react'
import styled from 'styled-components'

import Section from './section'
import Button from './button'
import device from '../utilities/device'

const StyledSection = styled(Section)`
  background-color: black;
  color: var(--light-color);
`

const Form = styled.form`
  @media ${device.sm} {
    margin: 0 auto;
    max-width: 500px;
  }

  @media ${device.lg} {
    max-width: 600px;
  }

  @media ${device.xl} {
    max-width: 900px;
  }
`

const Input = styled.input`
  display: block;
  width: 100%;
  background-color: var(--dark-color);
  border: 2px solid var(--light-color);
  border: none;
  color: var(--light-color);
  margin-bottom: 1rem;
  min-height: 2rem;
  padding: .5rem;

  &:focus {
    outline: 1px solid var(--accent-color);
  }
`

const Message = styled(Input)`
  resize: vertical;
`

const Submit = styled(Button)`
  float: right;
`

export default function Contact() {
  return (
    <StyledSection title='Contact' id='contact'>
      <Form name='contact' method='POST' data-netlify='true'>
        <Input type='text' placeholder='Name' name='name' />
        <Input type='email' placeholder='Email' name='email' />
        <Message as='textarea' placeholder='Message' name='message' rows='4' />
        <Submit type='submit'>Send</Submit>
      </Form>
    </StyledSection>
  )
}