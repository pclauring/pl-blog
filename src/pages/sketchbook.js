import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class SketchbookPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Sketchbook"
          keywords={[`sketch`, `drawing`, `template`, `art`]}
        />
        <Bio />
        <h3>Sketchbook</h3>
        <p>
          Posting my latest <strong>drawings</strong>. Hopefully this will keep
          me honest about drawing more & sharing.
        </p>
      </Layout>
    )
  }
}

export default SketchbookPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
