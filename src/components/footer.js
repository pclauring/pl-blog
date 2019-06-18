import React from "react"

import { rhythm } from "../utils/typography"

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        {/* <div style={{ float: "right" }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div> */}
        <a
          href="https://instagram.com/piercelauring"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>{" "}
        &bull;{" "}
        <a
          href="https://github.com/pclauring"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{" "}
        &bull;{" "}
        <a
          href="https://linkedin.com/in/pierce-lauring"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </footer>
    )
  }
}

export default Footer
