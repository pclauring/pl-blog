import React from "react"
import logo from "../../content/assets/cat-face.svg"

export default function Header() {
  return (
    <div style={{ marginRight: `10px`, marginTop: `-10px` }}>
      <img
        src={logo}
        style={{ width: `75px`, height: `75px` }}
        alt="cat face"
      />
    </div>
  )
}
