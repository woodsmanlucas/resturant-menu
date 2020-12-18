import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image.js"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#cb3033`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `auto`,
        maxWidth: 960,
        padding: `0 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
      }}
    >
      <div style={{ minWidth: `100px`, maxWidth: `300px` }}>
        <Link
          to="/"
          style={{
            color: `#f6e637`,
            textDecoration: `none`,
          }}
        >
          <Image alt={siteTitle}  />

        </Link>
        </div>
        <div style={{
          display: 'flex',
          padding: '0 50px'
          }}>
        <Link
          to="/breakfast-menu"
          style={{
            color: `#f6e637`,
            textDecoration: `none`,
            display: `block`,
            margin: `auto 0`,
            padding: '10px'
          }}
        >
        Breakfast Menu
        </Link>
        <Link
          to="/dinner-menu"
          style={{
            color: `#f6e637`,
            textDecoration: `none`,
            margin: `auto 0`,
            padding: `10px`
          }}
        >
        Dinner Menu
        </Link>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
