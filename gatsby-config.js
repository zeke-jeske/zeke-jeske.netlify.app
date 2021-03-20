module.exports = {
  siteMetadata: {
    title: 'Zeke Jeske',
    titleTemplate: '%s | Zeke Jeske',
    description:
      'Zeke Jeske is a front-end web developer and high school student from Madison, Wisconsin specializing in Wordpress and Gatsby.',
    url: 'https://zeke-jeske.netlify.app',
    lang: 'en',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`,
      },
    },
  ],
}
