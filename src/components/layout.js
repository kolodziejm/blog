import React from 'react'
import { Link } from 'gatsby'
import './reset.js';

class Template extends React.Component {
  render() {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Template
