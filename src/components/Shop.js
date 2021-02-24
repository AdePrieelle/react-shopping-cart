import React from 'react';
import '../styles/Shop.scss';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ShopDetails from './ShopDetails';
import ProductDetails from './ProductDetails';
import AllProducts from './AllProducts';

const Shop = (props) => {
  const match = useRouteMatch();
  const products = AllProducts;

  return (
    <div>
      <div className="shop">Shop</div>
      <Switch>
        <Route exact path={match.path}>
          <ShopDetails 
            products={products} 
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
        <Route path={`${match.path}/:productId`}>
          <ProductDetails 
            products={products} 
            addOrder={props.addOrder} 
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
      </Switch>
    </div>

  )
}

export default Shop;
