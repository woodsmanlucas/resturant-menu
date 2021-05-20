import React from "react"
import { graphql, StaticQuery } from "gatsby"

export default function Breakfast(props) {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  images
                  name
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => (
        <div>
          {prices.edges.map(({ node: price }) => (
            <div key={price.id}>
                <p>{price.product.name}</p>
                {price.product.images && <img src={price.product.images} alt={price.product.name}/>}
            </div>
          ))}
        </div>
      )}
    />
  )
}