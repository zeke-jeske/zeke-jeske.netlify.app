import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import Section from './section'
import TechProfficiencyBar from './tech-profficiency-bar'
import ResponsiveContainer from './responsive-container'
import device from '../utilities/device'

const StyledSection = styled(Section)`
  /* Ensures that the masthead is not at all in view when a #about anchor link is clicked */
  scroll-margin-top: 0;
`

const FlexContainer = styled(ResponsiveContainer)`
  display: flex;
  flex-direction: column;

  @media ${device.md} {
    flex-direction: row;
  }
`

const Column = styled.div`
  flex-basis: 0;
  text-align: center;

  @media ${device.sm} {
    padding: 0 3rem;
  }
`

const Left = styled(Column)`
  flex: 2;
`

const Right = styled(Column)`
  flex: 3;
`

export default function About() {
  return (
    <StyledSection id='about' title='About Me'>
      <FlexContainer>
        <Left>
          <h3>Who I am</h3>
          <StaticImage
            src='../images/head-shot.jpg'
            alt='Zeke'
            width={512}
            height={512}
            style={{
              borderRadius: '50%',
              maxWidth: '256px',
            }}
          />
          <p>
            I'm a full-stack web developer and high school student from Madison,
            WI. I build fast, responsive, and accessible websites using tools
            like Wordpress and Gatsby.
          </p>
        </Left>
        <Right>
          <h3>What I know</h3>
          <TechProfficiencyBar name='Javascript' percent={98} />
          <TechProfficiencyBar name='HTML' percent={96} />
          <TechProfficiencyBar name='CSS' percent={85} />
          <TechProfficiencyBar name='WordPress' percent={70} />
          <TechProfficiencyBar name='React' percent={93} />
          <TechProfficiencyBar name='Gatsby' percent={70} />

          <p>I am also profficient using NPM and Bash.</p>
        </Right>
      </FlexContainer>
    </StyledSection>
  )
}
