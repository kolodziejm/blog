import React from 'react'
import { Link } from 'gatsby'
import './reset.js';

class Template extends React.Component {
  render() {
    const { children } = this.props

    let header = (
      <h1>
        <Link to={'/'}>
          Gatsby Starter Blog
        </Link>
      </h1>
    )

    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Template
