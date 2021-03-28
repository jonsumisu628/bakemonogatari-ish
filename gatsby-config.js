/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-styled-components`,
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    'gatsby-remark-prismjs-title',
                    `gatsby-remark-prismjs`,
                ]
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts`,
            },
        },
    ],
}
