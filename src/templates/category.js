import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class CategoryTemplate extends React.Component {
    render() {
        console.log(this.props.data)
        // const post = this.props.data.markdownRemark
        // const siteTitle = this.props.data.site.siteMetadata.title;
        // const siteDescription = post.excerpt

        return (
            <Layout>
                {/* <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        /> */}
                <h1>To strona kategorii</h1>
                <p>
                    Jeśli to widzisz to zajebiście!
        </p>
                {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
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
      }
    }
    allMarkdownRemark(filter: { frontmatter: { category:  { eq: $category }  } }) {
        edges {
            node {
                id
                excerpt
                html
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    category
                }
            }
        }
     
    }
  }
`
