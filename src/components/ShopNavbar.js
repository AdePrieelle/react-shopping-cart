import React from 'react';
import '../styles/ShopNavbar.scss';
import { Link, Switch, Route } from 'react-router-dom';

const ShopNavbar = (props) => {
  return (
    <div className="shop-navbar">
      <div className="navbar-title-wrapper">
        <div className="navbar">
          <div className="navbar-category">
            <Link to={`/shop/all`}>
              All      
            </Link>
          </div>
          <div className="navbar-category">
            <Link to={`/shop/women`}>
              Women    
            </Link>
          </div>
          <div className="navbar-category">
            <Link to={`/shop/men`}>
              Men     
            </Link>
          </div>
        </div>
        <div className="title">
          <Switch>
            <Route path={`/shop/all`}>
              All Clothing
            </Route>
            <Route path={`/shop/women`}>
              Women's Clothing
            </Route>
            <Route path={`/shop/men`}>
              Men's Clothing
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default ShopNavbar;
