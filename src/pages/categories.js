import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Navigation from '../components/navigation/Navigation'
import PageHeader from '../components/typography/PageHeader'
import StyledLink from '../components/Link'

const CategoriesContainer = styled.ul`
  list-style: none;
  text-align: center;
`

const CategoriesItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`

const Content = styled.div`
  height: 100%;
  padding: 5rem 0;
  background: #f8f8f8;
`

class Categories extends React.Component {
  state = {
    showMobileNav: false,
  }

  switchMobileNav = e => {
    e.preventDefault()

    this.setState({
      showMobileNav: !this.state.showMobileNav,
    })
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allMarkdownRemark.edges

    let categoriesArr = []
    posts.forEach(post => {
      categoriesArr.push(post.node.frontmatter.category)
    })

    // Eliminate dupes
    const categories = categoriesArr.filter((value, index, array) => {
      return array.indexOf(value) == index
    })

    const mappedCategories = categories.map(category => {
      return (
        <CategoriesItem key={category}>
          <StyledLink to={`/${category.toLowerCase()}`}>{category}</StyledLink>
        </CategoriesItem>
      )
    })

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'Index page of the blog', content: siteDescription }]}
          title={siteTitle}
        />
        <Navigation
          categoriesActive="true"
          hamburgerClicked={this.switchMobileNav}
          showMobileNav={this.state.showMobileNav}
        />
        <Content>
          <PageHeader margin="0 0 5rem 0">Post categories</PageHeader>
          <CategoriesContainer>{mappedCategories}</CategoriesContainer>
        </Content>
      </Layout>
    )
  }
}

export default Categories

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            category
          }
        }
      }
    }
  }
`
