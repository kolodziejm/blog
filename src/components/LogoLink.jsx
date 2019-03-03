import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Logo = styled.span`
  color: #abff4f;
`

export default () => (
  <Link to="/">
    <Logo>&lt;/&gt;</Logo>
  </Link>
)
