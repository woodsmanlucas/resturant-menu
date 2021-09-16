import React from 'react'
import Layout from '../components/layout'
import Rubs from '../components/Rubs+Seasonings'
import Chourico from '../components/chourico'
import Sauce from '../components/hot-sauce'



const SpicesPage = () => (
    <Layout>
    <h1>Spicy Colonial Portuguese Chouriço</h1>
    <Chourico/>
    <h1>Hot Sauces</h1>
    <Sauce/>
    <h1>Rubs + Seasonings</h1>
    <Rubs/>
    </Layout>
)

export default SpicesPage