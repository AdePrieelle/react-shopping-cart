import React from 'react';
import '../styles/Cart.scss';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const getSubtotalPrice = () => {
    let totalPrice = 0;
    props.order.map(order => (
      totalPrice += (order.price * order.quantity)
    ))
    return totalPrice;
  }

  const subtotalPrice = getSubtotalPrice();

  return (
    <div className="cart">
      <div className="cart-title">Cart</div>
      {props.order.length === 0 && 
        <div className="no-orders">
          <div className="no-orders-title-header">
            Oops!
          </div>
          <div className="no-orders-title-message">
            You don't have any products in your basket yet
          </div>
          <Link to="/shop">
            Shop here
          </Link>
        </div>
      }

      {props.order.length > 0 &&
      props.order.map((order, index) => (
        <div key={index} id={index}>
          <Link to={`/shop/${order.gender}/${order.id}`}>
            <div className="order-title">{order.title}</div>
            <img className="order-img" src={order.image} style={{width: "200px", height: "auto"}} alt="product-img"></img>
          </Link>
          <div className="order-price">€{props.formatPriceValue(order.price)}</div>
          <div className="order-size">{order.size}</div>
          <div className="order-quantity">{order.quantity}</div>
          <button className="update-quantity" onClick={props.incrementQuantityOrderItem.bind(this)}>Icrement quantity</button>
          <button className="update-quantity" onClick={props.decrementQuantityOrderItem.bind(this)}>Decrement quantity</button>
          <div className="subtotal-product">€{props.formatPriceValue(order.price*order.quantity)}</div>
          <button className="delete-from-cart" onClick={props.deleteOrderItem.bind(this)}>Remove</button>
        </div>
      ))
      }

      {props.order.length > 0 &&
      <div className="order-summary">
        <div className="order-summary-title">Order Summary</div>
        <div className="subtotal">
          <div className="subtotalAmount">Subtotal({props.subtotalAmountOfProducts})</div>
        <div className="subtotalPrice">€{props.formatPriceValue(subtotalPrice)}</div>
        </div>
      </div>
      }
    </div>
  )
}

export default Cart;
