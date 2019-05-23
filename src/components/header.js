import React from "react"
import logo from "../../content/assets/cat-face.svg"

export default function Header() {
  return (
    <div
      //style={{ display: `inline` }}
      style={{ marginRight: `10px` }}
    >
      <img src={logo} style={{ width: `50px`, height: `50px` }} />
    </div>
  )
}
