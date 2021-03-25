import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/styles/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default class BlogPage extends React.Component {
    render() {
        const posts = this.props.data.markdownRemark

        return (
            <Layout>
                <div>
                    <p>{posts.frontmatter.title}</p>
                    <p>{posts.frontmatter.date}</p>
                    <div
                        dangerouslySetInnerHTML={{__html: posts.html}}
                    ></div>
                </div>
            </Layout>
        )
    }
}
