import React from 'react';
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Navigation from '../components/navigation/Navigation';
import PageHeader from '../components/typography/PageHeader';
import Card from '../components/card/Card';
import CardsList from '../components/CardsList';

const ArchiveCardsList = styled(CardsList)`
  max-width: 35rem;
`;

class Archive extends React.Component {

  state = {
    showMobileNav: false
  }

  switchMobileNav = (e) => {
    e.preventDefault();

    this.setState({
      showMobileNav: !this.state.showMobileNav
    })
  }


  render() {

    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;
    const posts = this.props.data.allMarkdownRemark.edges;

    const postsMapped = posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <Card
          src={node.frontmatter.thumbnail.childImageSharp.fluid.src}
          srcSet={node.frontmatter.thumbnail.childImageSharp.fluid.srcSet}
          sizes={node.frontmatter.thumbnail.childImageSharp.fluid.sizes}
          alt={title}
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
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'Entire post library', content: siteDescription }]}
          title={siteTitle}
        />
        <Navigation archiveActive="true" hamburgerClicked={this.switchMobileNav} showMobileNav={this.state.showMobileNav} />
        <PageHeader margin="9rem 0 3rem 0">Entire post library</PageHeader>
        <ArchiveCardsList>
          {postsMapped}
        </ArchiveCardsList>
      </Layout>
    )
  }
}

export default Archive;

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
          excerpt
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
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
