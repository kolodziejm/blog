import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Logo = styled.span`
  color: #abff4f;
  font-size: 4rem;
`

export default () => (
  <Link style={{ textDecoration: 'none' }} to="/">
    <Logo>&lt;/&gt;</Logo>
  </Link>
)
