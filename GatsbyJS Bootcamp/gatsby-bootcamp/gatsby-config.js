module.exports = {
  siteMetadata: {
    title: 'GatsbyJS Test Site!',
    author: 'Super Dan Scott'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}