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


const useStyles = makeStyles({
  root: {
    width: 200,
  },
  media: {
    height: 200,
  },
});

export default function Breakfast(props) {
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

  return (
    <StaticQuery
      query={graphql`
        query Breakfast {
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
          {prices.edges.map(({ node: price }) => (
            price.product.metadata.Menu === "Breakfast" &&
            <Grid key={price.id} item xs={gridWidth}>
            <Card className={classes.root}>
              <CardActionArea>
                {price.product.images && price.product.images.length > 0 && <CardMedia className={classes.media} image={price.product.images[0]} title={price.product.name}/>}
                <CardContent>
                <p>{price.product.name}</p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">Add to Cart</Button>
              </CardActions>
            </Card>
            </Grid>
          ))}
        </Grid>
      )}
    />
  )
}