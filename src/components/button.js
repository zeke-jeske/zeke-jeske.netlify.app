import styled from 'styled-components'

const Button = styled.button`
  margin: 1.5rem 0;
  padding: 0.75rem 1rem;
  border: 2px solid var(--light-color);
  position: relative;
  font-size: 1.125rem;
  overflow: hidden;
  background-color: transparent;
  transition: color, background-color .2s ease-in-out;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    background-color: var(--light-color);
    color: var(--dark-color);
  }
`

export default Button;