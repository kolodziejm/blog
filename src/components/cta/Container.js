import React from 'react'
import styled from 'styled-components'
import image from '../../assets/abstract-message-sent.png'

export default styled.header`
  display: block;
  text-align: center;
  padding: 6rem 1rem 1rem 1rem;
  width: 100%;
  height: 60rem;
  @media only screen and (min-width: 48em) {
    height: 45rem;
  }

  background-image: linear-gradient(
      to bottom right,
      rgba(131, 56, 236, 0.95) 20%,
      rgba(255, 0, 110, 0.8)
    ),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
