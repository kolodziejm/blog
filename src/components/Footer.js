import React from 'react'
import styled from 'styled-components'

import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import twitterIcon from '../assets/twitter.svg'

import LogoLink from '../components/LogoLink'

const Container = styled.footer`
  padding: 1.8rem 0;
  background-image: linear-gradient(
    to right,
    rgba(131, 56, 236, 0.95) 20%,
    rgba(255, 0, 110, 0.95)
  );
`

const LegalContainer = styled.div`
  text-align: center;
  @media only screen and (min-width: 64em) {
    margin-right: -165px;
  }
`

const Legal = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 700;
`

const Policy = styled.a`
  font-size: 1.4rem;
  display: block;
  text-decoration: none;
  color: #abff4f;
  cursor: pointer;
  font-weight: 700;
`

const IconContainer = styled.ul`
  list-style: none;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`

const IconItem = styled.li`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`

const IconLink = styled.a``

const ContentLimiter = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  @media only screen and (min-width: 64em) {
    display: flex;
    justify-content: space-around;
  }
`

export default props => (
  <Container>
    <ContentLimiter>
      <div />
      <LegalContainer>
        <div>
          <Legal>Copyright &copy; Marcin Kołodziej 2019</Legal>
          <Policy
            href="https://privacypolicies.com/privacy/view/eadf5ceec1f9b671511e3ac25d5472aa"
            target="_blank"
          >
            Privacy policy
          </Policy>
        </div>
      </LegalContainer>
      <IconContainer>
        <IconItem>
          <IconLink href="https://github.com/kolodziejm" target="_blank">
            <img src={githubIcon} alt="Github" />
          </IconLink>
        </IconItem>
        <IconItem>
          <IconLink href="https://www.linkedin.com/in/kolomar/" target="_blank">
            <img src={linkedinIcon} alt="linkedIn" />
          </IconLink>
        </IconItem>
        <IconItem>
          <IconLink href="https://twitter.com/Kolomar_dev" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </IconLink>
        </IconItem>
      </IconContainer>
    </ContentLimiter>
  </Container>
)
