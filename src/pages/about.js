import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author
    const { linkedin } = data.site.siteMetadata.social

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Sketchbook"
          keywords={[`bio`, `c#`, `javascript`, `react`, `redux`, `gatsby`]}
        />
        <h1>About Pierce</h1>
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(1.5),
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
            }}
            imgStyle={{}}
          />
          <p>
            I created this blog as a way to share my sketchbook project and
            eventually other things I have been working on. I graduated
            University of Michigan Ann Arbor with a BS in Biology. My interests
            include drawing, painting, rowing <strong>(erging)</strong>,
            3D-Printing and programming. If you are looking for work experience
            you can find my professional history{" "}
            <a href={`https://linkedin.com/in/${linkedin}`}>here</a>.
          </p>
        </div>
      </Layout>
    )
  }
}

// childImageSharp {
//   fixed(width: 50, height: 50) {
//     ...GatsbyImageSharpFixed
//   }
// }

export default AboutPage

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/about-headshot.jpg/" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        social {
          instagram
          linkedin
        }
      }
    }
  }
`
