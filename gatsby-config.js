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
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts`,
            },
        },
    ],
}
