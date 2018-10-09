import React from 'react'
import styled from 'styled-components';

import Navigation from '../components/navigation/SimpleNavigation';
import Layout from '../components/layout';
import Link from '../components/Link';

const SadFace = styled.h1`
  font-size: 10rem;
  color: #3A86FF;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 15rem;
`;

const Comment = styled.p`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 4rem;
`;

const StyledLink = styled(Link)`
  text-align: center;
  display: block;
`;

const NotFoundPage = () => (
  <React.Fragment>
    <Navigation />
    <SadFace>:(</SadFace>
    <Comment>Oops, something went wrong.</Comment>
    <StyledLink to="/">Get me out of here</StyledLink>
  </React.Fragment>
)

export default NotFoundPage
