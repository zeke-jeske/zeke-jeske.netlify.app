import React from 'react'
import Button from './button'

export default function ScrollDownButton({ children }) {
  return (
    <Button as='a' href='/#about'>
      { children }
    </Button>
  )
}