import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          Logo
        </Link>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/shop">
            Shop
          </Link>
        </li>
      </ul>
      <div className="shopping-cart-icon">
        <Link to="/cart">
          <div className="shopping-icon-amount">
            <i className="fas fa-shopping-bag"></i>
            {(props.subtotalAmountOfProducts > 0) 
              ? <div className="amount-of-cart-order-items">{props.subtotalAmountOfProducts}</div>
              : null
            }
          </div>

        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
