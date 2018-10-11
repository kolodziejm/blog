module.exports = {
  siteMetadata: {
    title: 'Kolomar Blog',
    author: 'Marcin Kołodziej',
    description: 'Blog about front-end stuff, self-improvement and more!',
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127196454-1"
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kolomar blog`,
        short_name: `Kolomar`,
        start_url: `/`,
        background_color: `#8338ec`,
        theme_color: `#ABFF4F`,
        display: `minimal-ui`,
        icon: `src/assets/my-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://kolomar.us19.list-manage.com/subscribe/post?u=cbec103bbbc76d2fc1cb15995&amp;id=5ddab57912',
      }
    },
  ],
}
