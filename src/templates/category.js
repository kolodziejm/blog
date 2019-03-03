import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Navigation from '../components/navigation/Navigation'
import PageHeader from '../components/typography/PageHeader'
import CardsList from '../components/CardsList'
import Card from '../components/card/Card'

const Content = styled.div`
  height: 100%;
  padding: 5rem 0;
  background: #f8f8f8;
`

class CategoryTemplate extends React.Component {
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
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const category = this.props.data.allMarkdownRemark.edges[0].node.frontmatter
      .category

    const postsMapped = posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <Card
          src={node.frontmatter.thumbnail.childImageSharp.fluid.src}
          srcSet={node.frontmatter.thumbnail.childImageSharp.fluid.srcSet}
          sizes={node.frontmatter.thumbnail.childImageSharp.fluid.sizes}
          title={title}
          date={node.frontmatter.date}
          key={node.fields.slug}
          categoryTo={`/${node.frontmatter.category.toLowerCase()}`}
          category={node.frontmatter.category}
          time={node.timeToRead}
          description={node.excerpt}
          postTo={node.fields.slug}
        />
      )
    })

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${category} | ${siteTitle}`}
        />
        <Navigation
          categoriesActive="true"
          hamburgerClicked={this.switchMobileNav}
          showMobileNav={this.state.showMobileNav}
        />
        <Content>
          <PageHeader margin="0 0 3rem 0">{category}</PageHeader>
          <CardsList>{postsMapped}</CardsList>
        </Content>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query BlogPostByCategory($category: String!) {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          excerpt
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "D MMMM, YYYY")
            title
            category
            thumbnail {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`
