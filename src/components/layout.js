import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import './reset.js';

const Div = styled.div`
  margin-top: 66px;
`;
class Template extends React.Component {
  render() {

    return (
      <Div>
        {this.props.children}
      </Div>
    )
  }
}

export default Template
