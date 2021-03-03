import React from 'react';
import '../styles/ShopCategory.scss';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ShopDetails from './ShopDetails';
import ProductDetails from './ProductDetails';

const ShopCategory = (props) => {
  const { path } = useRouteMatch();

  return (
    <div className="shop-category">
      <Switch>
        <Route exact path={path}>
          <div className="shop-category-title-wrapper">
            <div className="shop-category-title">{props.categoryTitle}</div>
          </div>
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
