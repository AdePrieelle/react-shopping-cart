import React, { useState } from 'react';
import '../styles/Shop.scss';
import { Switch, Route } from 'react-router-dom';
import ShopDetails from './ShopDetails';
import ProductDetails from './ProductDetails';

const Shop = (props) => {
  // console.log(props.match);
  const productsArray = [
    {
      id: 1,
      title: "T-shirt black",
      price: 20
    },
    {
      id: 2,
      title: "Jeans",
      price: 39
    },
    {
      id: 3,
      title: "Scarf",
      price: 15
    }
  ]
  const [products, setProducts] = useState(productsArray);

  return (
    <div>
      <div className="shop">Shop</div>
      <Switch>
        <Route exact path={props.match.path}>
          {/* <ShopDetails products={products} match={props.match} /> */}
          <ShopDetails products={products} />
        </Route>
        <Route path={`${props.match.path}/:productId`}>
          <ProductDetails products={products} />
          {/* <div>productdetails</div> */}
        </Route>
      </Switch>
    </div>

  )
}

export default Shop;
