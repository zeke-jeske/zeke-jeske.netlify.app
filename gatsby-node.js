const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type == 'ProjectsJson') {
    const relativePath = createFilePath({ node, getNode, basePath: 'projects' })

    createNodeField({
      node,
      name: 'slug',
      value: `/projects${relativePath}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/project.js'),
      context: {
        id: node.id
      }
    })
  })
}