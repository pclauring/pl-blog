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

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Sketchbook"
          keywords={[
            `bio`,
            `c#`,
            `javascript`,
            `react`,
            `redux`,
            `gatsby`,
            `drawing`,
            `programming`,
          ]}
        />
        <h1>About {author}</h1>
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
            I created this blog as a way to share my sketchbook progress and
            eventually other projects I have been working on. I graduated from
            the University of Michigan in Ann Arbor with a BS in Biology. My
            interests include cats, drawing, painting, rowing{" "}
            <strong>(erging)</strong>, 3D-Printing and programming.
          </p>
        </div>
      </Layout>
    )
  }
}

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
        }
      }
    }
  }
`
