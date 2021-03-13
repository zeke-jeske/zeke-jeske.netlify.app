import React from 'react'
import styled from 'styled-components'
import Section from './section'
import { StaticImage } from 'gatsby-plugin-image'
import TechProfficiencyBar from './tech-profficiency-bar'

const Container = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  flex-basis: 0;
  padding: 0 3rem;
`

const Left = styled(Wrapper)`
  flex: 2;
  text-align: center;
`

const Right = styled(Wrapper)`
  flex: 3;
`

export default function About() {
  return (
    <Section id='about' title='About'>
      <Container>
        <Left>
          <StaticImage
            src='../images/head-shot.jpg'
            alt='Zeke'
            width={1259}
            style={{
              width: '16rem',
              borderRadius: '50%',
            }}
          />
          <h3>Who I am</h3>
          <p>
            I'm a full-stack web developer from Madison, WI. I build fast, responsive, and accessible websites using tools like Wordpress and Gatsby. And yes, I'm only 15.
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
          <TechProfficiencyBar name='NPM' percent={95} />
          <TechProfficiencyBar name='Bash' percent={80} />
        </Right>
      </Container>
    </Section>
  )
}