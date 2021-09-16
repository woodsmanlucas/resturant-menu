import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useMediaQuery } from 'react-responsive';
import { useShoppingCart } from 'use-shopping-cart'




const useStyles = makeStyles({
  root: {
    width: 200,
  },
  media: {
    height: 200,
  },
});

export default function Dessert(props) {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: '(max-device-width: 480px)' })
  var flexDirection;
  var gridWidth;
  if (isMobile) {
    flexDirection = "column"
    gridWidth = 12
  } else {
    flexDirection = "row"
    gridWidth = 4
  }
  const { addItem } = useShoppingCart()

  return (
    <StaticQuery
      query={graphql`
        query Dessert {
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
                  description
                  name
                  metadata {
                    Menu
                  }
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => (

        <Grid container spacing={2} direction={flexDirection} justify="center" alignItems="center">
          {prices.edges.map(({ node: price }) => {
                        const newSKU = {
                          sku: price.id,
                          name: price.product.name,
                          price: price.unit_amount,
                          description: price.product.description,
                          currency: price.currency
                        }

            return(
            price.product.metadata.Menu === "Dessert" &&
            <Grid key={price.id} item xs={gridWidth}>
            <Card className={classes.root}>
              <CardActionArea>
                {price.product.images && price.product.images.length > 0 && <CardMedia className={classes.media} image={price.product.images[0]} title={price.product.name}/>}
                <CardContent>
                <h4>{price.product.name} - ${price.unit_amount/ 100}</h4>
                <p>{price.product.description}</p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => addItem(newSKU)}>Add to Cart</Button>
              </CardActions>
            </Card>
            </Grid>
          )})}
        </Grid>
      )}
    />
  )
}