import React, { useState } from 'react';
import '../styles/Shop.scss';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ShopDetails from './ShopDetails';
import ProductDetails from './ProductDetails';
import allProducts from './AllProducts';

const Shop = (props) => {

  const match = useRouteMatch();
  const [products, setProducts] = useState(allProducts);

  return (
    <div>
      <div className="shop">Shop</div>
      <Switch>
        <Route exact path={match.path}>
          <ShopDetails products={products} />
        </Route>
        <Route path={`${match.path}/:productId`}>
          <ProductDetails products={products} addOrder={props.addOrder} />
        </Route>
      </Switch>
    </div>

  )
}

export default Shop;
