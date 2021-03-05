import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AllProducts from './AllProducts';
import ShopCategory from './ShopCategory';

const Shop = (props) => {
  const { path } = useRouteMatch();
  const products = AllProducts;
  const productsMen = products.filter(product => (
    product.gender === "men"
  ))
  const productsWomen = products.filter(product => (
    product.gender === "women"
  ))

  return (
    <div className="shop">
      <Switch>
        <Route path={`${path}/all`}>
          <ShopCategory
            products={products}
            productsGender={products}
            addOrder={props.addOrder}
            formatPriceValue={props.formatPriceValue}
          />
        </Route>
        <Route path={`${path}/men`}>
          <ShopCategory
            products={products}
            productsGender={productsMen}
            addOrder={props.addOrder}
            formatPriceValue={props.formatPriceValue}
          />
        </Route>
        <Route path={`${path}/women`}>
          <ShopCategory
            products={products}
            productsGender={productsWomen}
            addOrder={props.addOrder}
            formatPriceValue={props.formatPriceValue}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Shop;
