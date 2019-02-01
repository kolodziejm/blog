import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import './reset.js';
import Footer from './Footer.js';

const Div = styled.main`
  margin-top: 7rem;
`;
class Template extends React.Component {
  render() {

    return (
      <Div>
        {this.props.children}
        <Footer />
      </Div>
    )
  }
}

export default Template
