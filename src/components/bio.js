import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from "../../content/assets/cat-face.svg"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1.5),
            }}
          >
            {/* <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            /> */}
            <p>
              Created by <strong>{author}</strong> who lives and works in
              Detroit as a software consultant. A blog site for his latest art
              projects and interests. <Link to="/about">More about him.</Link>
              {/* {` `}
              <a href={`https://instagram.com/${social.instagram}`}>
                You can follow me on instagram.
              </a>{" "} */}
            </p>
            <div style={{ marginRight: `10px`, marginTop: `-10px` }}>
              <img
                src={logo}
                style={{ width: `75px`, height: `75px` }}
                alt="cat face"
              />
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
        }
      }
    }
  }
`

export default Bio
