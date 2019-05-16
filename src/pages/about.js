import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const linkedin = data.site.siteMetadata.social.linkedin

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Sketchbook"
          keywords={[`bio`, `c#`, `javascript`, `react`, `redux`, `gatsby`]}
        />
        <Bio />
        <h3>About Me</h3>
        You can find my professional history{" "}
        <a href={`https://linkedin.com/in/${linkedin}`}>here</a>.
        <p />
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          linkedin
        }
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
