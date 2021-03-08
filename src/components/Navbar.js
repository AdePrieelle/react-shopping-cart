import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          ecowear
        </Link>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/shop/all">
            Shop
          </Link>
        </li>
      </ul>
      <div className="shopping-cart-icon">
        <Link to="/cart">
            <i className="fas fa-shopping-bag"></i>
            {(props.subtotalAmountOfProducts > 0) 
              ? <div className="shopping-cart-icon-amount">{props.subtotalAmountOfProducts}</div>
              : null
            }
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
