import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Navigation from '../components/navigation/Navigation'
import PageHeader from '../components/typography/PageHeader'
import Card from '../components/card/Card'
import CardsList from '../components/CardsList'
import StyledLink from '../components/Link'
import Container from '../components/cta/Container'
import CtaHeader from '../components/typography/CtaHeader'
import MediumHeader from '../components/typography/MediumHeader'
import CtaExtra from '../components/typography/CtaExtra'
import Form from '../components/cta/Form'
import CtaInput from '../components/inputs/CtaInput'
import CtaSubmit from '../components/inputs/CtaSubmit'
import Content from '../components/Content'

import addToMailChimp from 'gatsby-plugin-mailchimp'
import Paragraph from '../components/typography/Paragraph'

const ThankYouMessage = styled(Paragraph)`
  @media only screen and (min-width: 48em) {
    font-size: 1.8rem;
  }

  font-size: 1.5rem;
  color: #abff4f;
  margin-bottom: 3rem;
`

class BlogIndex extends React.Component {
  state = {
    showMobileNav: false,
    formEmail: '',
    showSubMessage: false,
  }

  switchMobileNav = e => {
    e.preventDefault()

    this.setState({
      showMobileNav: !this.state.showMobileNav,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.formEmail === '') {
      return
    }
    addToMailChimp(this.state.formEmail)
      .then(data => {
        this.setState({ showSubMessage: true, formEmail: '' })
        setTimeout(() => {
          this.setState({ showSubMessage: false })
        }, 8000)
      })
      .catch(() => {})
  }

  inputChangedHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allMarkdownRemark.edges

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
          meta={[{ name: 'Home', content: siteDescription }]}
          title={siteTitle}
        />
        <Navigation
          homeActive="true"
          hamburgerClicked={this.switchMobileNav}
          showMobileNav={this.state.showMobileNav}
        />
        <Container>
          <CtaHeader>Sign up for bonus content</CtaHeader>
          <CtaExtra margin="0 0 5rem 0">
            Extra tips, challenges, ideas and much more!
          </CtaExtra>
          {this.state.showSubMessage && (
            <ThankYouMessage>
              Thank you for subbing! You won't regret that :)
            </ThankYouMessage>
          )}
          <Form onSubmit={this.handleSubmit}>
            <CtaInput
              type="email"
              placeholder="Enter your email address"
              margin="0 auto 1rem auto"
              name="formEmail"
              onChange={this.inputChangedHandler}
              required
              value={this.state.formEmail}
            />
            <CtaSubmit type="submit" value="Sign me up!" />
          </Form>
        </Container>
        <Content>
          <PageHeader margin="0 0 3rem 0">Latest posts</PageHeader>
          <CardsList>{postsMapped}</CardsList>
        </Content>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
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
