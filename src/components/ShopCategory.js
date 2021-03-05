import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ShopNavbar from "./ShopNavbar";
import ShopDetails from './ShopDetails';
import ProductDetails from './ProductDetails';

const ShopCategory = (props) => {
  const { path } = useRouteMatch();

  return (
    <div className="shop-category">
      <Switch>
        <Route exact path={path}>
          <ShopNavbar />
          <ShopDetails 
            products={props.productsGender}
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
        <Route path={`${path}/:productId`}>
          <ProductDetails 
            products={props.products} 
            addOrder={props.addOrder} 
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default ShopCategory;
