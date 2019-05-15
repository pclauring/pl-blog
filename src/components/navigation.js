import React from "react"
import { Link } from "gatsby"
const Navigation = () => (
  <div style={{ background: "#f4f4f4", paddingTop: "10px" }}>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/sketchbook">Sketchbook</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Navigation
