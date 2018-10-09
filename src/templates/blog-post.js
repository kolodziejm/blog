import React from 'react'
import styled from 'styled-components';

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from "disqus-react";

import Layout from '../components/layout'
import PageHeader from '../components/typography/PageHeader';
import Thumbnail from '../components/Thumbnail';
import InfoContainer from '../components/InfoContainer';
import PostDate from '../components/PostDate';
import PostCategory from '../components/PostCategory';
import PostTime from '../components/PostTime';
import PostContainer from '../components/PostContainer';
import PostContent from '../components/PostContent';
import Navigation from '../components/navigation/Navigation';

const PostThumbnail = styled(Thumbnail)`
  margin-bottom: 2rem;

  @media only screen and (min-width: 48em) {
    margin-bottom: 3rem;
  }
`;

const DisqusWrapper = styled.div`
  max-width: 80rem;
  font-size: 1.8rem;
  padding: 1rem;
  margin: 2rem auto 2rem auto;
`;
class BlogPostTemplate extends React.Component {

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
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = post.excerpt;
    const disqusShortname = "kolomar";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title
    };

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'Post page', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Navigation hamburgerClicked={this.switchMobileNav} showMobileNav={this.state.showMobileNav} />
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
        <DisqusWrapper>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </DisqusWrapper>
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
