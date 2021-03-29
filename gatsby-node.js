const path = require("path")
const {createFilePath} = require("gatsby-source-filesystem")

exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions
    const result = await graphql(
        `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    )
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create blog-list pages
    const posts = result.data.allMarkdownRemark.edges;
    const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({length: numPages}).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/template/bloglist.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })

    // Create blog-page pages
    posts.forEach((post, index) => {
        //前後記事
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
            path: `/blog${post.node.fields.slug}`,
            component: path.resolve("./src/template/blogpage.js"),
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode})
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
