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
            products={props.products}
            productsAll={props.productsAll}
            productsMen={props.productsMen}
            productsWomen={props.productsWomen}
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
        <Route path={`${path}/:productId`}>
          <ProductDetails 
            productsGender={props.productsGender} 
            addOrder={props.addOrder} 
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default ShopCategory;
