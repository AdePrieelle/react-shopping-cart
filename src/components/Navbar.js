import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  let subtotalAmountOfProducts = 0;
  props.order.map(order => (
    subtotalAmountOfProducts += order.quantity
  ));

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
          {/* <i className="fas fa-shopping-cart"></i> */}
          <div className="shopping-icon-amount">
            <i className="fas fa-shopping-bag"></i>
            {(subtotalAmountOfProducts > 0) 
              ? <div className="amount-of-cart-order-items">{subtotalAmountOfProducts}</div>
              : null
            }
          </div>

        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
