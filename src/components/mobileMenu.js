import React from "react"
import { Link } from "gatsby"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const MobileMenu = () => {
    return <>
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
    <Link
          to="/shopping-cart"
          style={{
            color: `#f6e637`,
            textDecoration: `none`,
            margin: `auto 0`,
            padding: `10px`
          }}
        >
          <ShoppingCartIcon/>
        </Link>
    </>
}

export default MobileMenu
