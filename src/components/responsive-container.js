import styled from 'styled-components'
import device from '../utilities/device'

const ResponsiveContainer = styled.div`
  @media ${device.md} {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${device.lg} {
    max-width: 900px;
  }

  @media ${device.xl} {
    max-width: 1200px;
  }
`

export default ResponsiveContainer;
