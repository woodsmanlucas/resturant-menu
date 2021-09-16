import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Image from "./image.js"
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from './mobileMenu.js';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useShoppingCart } from "use-shopping-cart";

const Header = ({ siteTitle }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 480px)' })
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  };

  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    formattedTotalPrice,
    redirectToCheckout,
    clearCart,
  } = useShoppingCart()


  return (isMobile ?
<header
    style={{
      background: `#cb3033`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `column`
      }}>
    <div
      style={{
        padding: `0 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
      }}
    >

      <div style={{ minWidth: `100px`, maxWidth: `300px`, marginRight: `auto`}}>
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
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon style={{color: `#f6e637`}}/>
        </Button>
        </div>
        {show && <MobileMenu />}
    </div>
  </header>    :
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
          to="/spices"
          style={{
            color: `#f6e637`,
            textDecoration: `none`,
            display: `block`,
            margin: `auto 0`,
            padding: '10px'
          }}
        >
      Chef Edna's Artisanal Spiced Products
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
          to="/dessert-menu"
          style={{
            color: `#f6e637`,
            textDecoration: `none`,
            margin: `auto 0`,
            padding: `10px`
          }}
        >
        Dessert Menu
        </Link>
        <Link
          to="/drinks-menu"
          style={{
            color: `#f6e637`,
            textDecoration: `none`,
            margin: `auto 0`,
            padding: `10px`
          }}
        >
        Drinks Menu
        </Link>
        <Button
          to="/shopping-cart"
          style={{
            color: `#f6e637`,
            textDecoration: `none`,
            margin: `auto 0`,
            padding: `10px`
          }}
          disabled={loading}
          onClick={() => {
            setLoading(true)
            redirectToCheckout()
          }}
        >
          {loading ?
          'Loading...'
          :
          <ShoppingCartIcon/>}
        </Button>
        {/* <p
                  style={{
                    color: `#f6e637`,
                    textDecoration: `none`,
                    margin: `auto 0`,
                    padding: `10px`
                  }}>
          {formattedTotalPrice}
        </p> */}
        {/* <Button
          to="/shopping-cart"
          style={{
            color: `#f6e637`,
            margin: `auto 0`,
            padding: `10px`
          }}
          disabled={loading}
          onClick={() => {
            clearCart()
          }}
        >
          Clear Cart
        </Button> */}
        </div>
    </div>
  </header>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
