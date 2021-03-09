import React from 'react';
import '../styles/CartNoOrders.scss';
import { Link } from 'react-router-dom';

const CartNoOrders = (props) => {
  return (
    <div className="no-orders">
      <div className="no-orders-title">
        Looks like your bag is empty
      </div>
      <Link to="/shop/all">
        <div className="no-orders-continue-shopping-button">
          Continue shopping
        </div>
      </Link>
    </div>
  )
}

export default CartNoOrders;
