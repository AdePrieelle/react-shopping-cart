import React from 'react';
import '../styles/Shop.scss';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
// import ShopDetails from './ShopDetails';
// import ProductDetails from './ProductDetails';
import AllProducts from './AllProducts';
import ShopCategory from './ShopCategory';

const Shop = (props) => {
  const { path, url } = useRouteMatch();
  const products = AllProducts;
  const productsMen = products.filter(product => (
    product.gender === "men"
  ))
  const productsWomen = products.filter(product => (
    product.gender === "women"
  ))

  return (
    <div>
      <div className="shop">Shop</div>
      <Link to={`${url}/all`}>
        All      
      </Link>
      <Link to={`${url}/men`}>
        Men     
      </Link>
      <Link to={`${url}/women`}>
        Women    
      </Link>
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

      
      {/* <Switch>
        <Route exact path={`${path}/all`}>
          <ShopDetails 
            products={products}
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
        <Route exact path={`${path}/all/:productId`}>
          <ProductDetails 
            products={products} 
            addOrder={props.addOrder} 
            formatPriceValue = {props.formatPriceValue}
          />
        </Route> */}
        {/* <Route exact path={`${path}/men`}>
          <ShopDetails 
            products={productsMen}
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
        <Route exact path={`${path}/men/:productId`}>
          <ProductDetails 
            products={products} 
            addOrder={props.addOrder} 
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
        <Route exact path={`${path}/women`}>
          <ShopDetails 
            products={productsWomen}
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
        <Route exact path={`${path}/women/:productId`}>
          <ProductDetails 
            products={products} 
            addOrder={props.addOrder} 
            formatPriceValue = {props.formatPriceValue}
          />
        </Route>
      </Switch> */}
      





      {/* <Switch>
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
      </Switch> */}
    </div>

  )
}

export default Shop;

// import React from 'react';
// import '../styles/Shop.scss';
// import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import ShopDetails from './ShopDetails';
// import ProductDetails from './ProductDetails';
// import AllProducts from './AllProducts';

// const Shop = (props) => {
//   const match = useRouteMatch();
//   const products = AllProducts;

//   return (
//     <div>
//       <div className="shop">Shop</div>
//       <Switch>
//         <Route exact path={match.path}>
//           <ShopDetails 
//             products={products} 
//             formatPriceValue = {props.formatPriceValue}
//           />
//         </Route>
//         <Route path={`${match.path}/:productId`}>
//           <ProductDetails 
//             products={products} 
//             addOrder={props.addOrder} 
//             formatPriceValue = {props.formatPriceValue}
//           />
//         </Route>
//       </Switch>
//     </div>

//   )
// }

// export default Shop;
