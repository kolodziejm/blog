import React from 'react'
import styled from 'styled-components';

import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SimpleNavigation from '../components/navigation/SimpleNavigation';
import PageHeader from '../components/typography/PageHeader';
import Thumbnail from '../components/Thumbnail';
import InfoContainer from '../components/InfoContainer';
import PostDate from '../components/PostDate';
import PostCategory from '../components/PostCategory';
import PostTime from '../components/PostTime';
import PostContainer from '../components/PostContainer';
import PostContent from '../components/PostContent';

const PostThumbnail = styled(Thumbnail)`
  margin-bottom: 2rem;

  @media only screen and (min-width: 48em) {
    margin-bottom: 3rem;
  }
`;
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = post.excerpt
    console.log(this.props);

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'Post page', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <SimpleNavigation />
        <PostContainer>
          <PageHeader margin="10rem 0 2rem 0">{post.frontmatter.title}</PageHeader>
          <InfoContainer>
            <PostDate date={post.frontmatter.date} />
            <PostCategory categoryTo={`/${post.frontmatter.category.toLowerCase()}`} category={post.frontmatter.category} />
            <PostTime time={post.timeToRead} />
          </InfoContainer>
          <PostThumbnail
            src={post.frontmatter.thumbnail.childImageSharp.fluid.src}
            srcSet={post.frontmatter.thumbnail.childImageSharp.fluid.srcSet}
            sizes={post.frontmatter.thumbnail.childImageSharp.fluid.sizes} />
          </PostContainer>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
