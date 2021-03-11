import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AllProducts from './AllProducts';
import ShopCategory from './ShopCategory';

const Shop = (props) => {
  const { path } = useRouteMatch();
  const products = AllProducts;
  const productsAll = products.filter(product => (
    product.gender === "all"
  ))
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
            productsGender={productsAll}
            productsAll={productsAll}
            productsWomen={productsWomen}
            productsMen={productsMen}
            addOrder={props.addOrder}
            formatPriceValue={props.formatPriceValue}
          />
        </Route>
        <Route path={`${path}/men`}>
          <ShopCategory
            products={productsMen}
            productsGender={productsMen}
            productsMen={productsMen}
            addOrder={props.addOrder}
            formatPriceValue={props.formatPriceValue}
          />
        </Route>
        <Route path={`${path}/women`}>
          <ShopCategory
            products={productsWomen}
            productsGender={productsWomen}
            productsWomen={productsWomen}
            addOrder={props.addOrder}
            formatPriceValue={props.formatPriceValue}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Shop;
