import React, { useState } from 'react';
import '../styles/Shop.scss';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ShopDetails from './ShopDetails';
import ProductDetails from './ProductDetails';
import allProducts from './AllProducts';

const Shop = (props) => {
  // only gain props.match directly when the component={} is in <Route> and not nested inside
  // console.log(props.match);
  const match = useRouteMatch();

  // const productsArray = [
  //   {
  //     id: 1,
  //     title: "T-shirt black",
  //     price: 20,
  //     image: tshirtMen,
  //   },
  //   {
  //     id: 2,
  //     title: "Jeans",
  //     price: 39
  //   },
  //   {
  //     id: 3,
  //     title: "Scarf",
  //     price: 15
  //   }
  // ]
  // const productsArray = allProducts;
  // console.log(allProducts);
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


        {/* 2. example to pass props to route */}
        {/* <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} /> */}
        
        {/* 4. render in route*/}
        {/* <Route exact path={props.match.path} render={(props) => <ShopDetails {...props} products={products} />} /> */}
        {/* <Route path={`${props.match.path}/:productId`} render={(props) => <ProductDetails {...props} products={products} />} /> */}
      </Switch>
    </div>

  )
}

export default Shop;
