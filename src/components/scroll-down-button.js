import React from 'react'
import Button from './button'

export default function ScrollDownButton({ children }) {
  return (
    <Button asLink href='/#about'>
      { children }
    </Button>
  )
}