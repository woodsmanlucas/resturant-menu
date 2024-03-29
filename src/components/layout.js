/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { CartProvider } from 'use-shopping-cart'

const stripekey = process.env.STRIPE_PUBLISHABLE_KEY

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          owner
          author
          authorGitHub
        }
      }
    }
  `)

  return (
        <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={stripekey}
        successUrl={`${window.location.origin}/success/`}
        cancelUrl={`${window.location.origin}/`}
        currency="USD"
        allowedCountries={['US', 'GB', 'CA']}
        billingAddressCollection={true}
      >
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()} {data.site.siteMetadata?.owner}, Built by <a href={data.site.siteMetadata?.authorGitHub}>{data.site.siteMetadata?.author}</a>, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
      </CartProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
