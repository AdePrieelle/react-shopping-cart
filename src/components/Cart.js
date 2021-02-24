import React from 'react';
import '../styles/Cart.scss';

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
    <div>
      <div className="cart">Cart</div>
      {props.order.map((order, index) => (
        <div key={index} id={index}>
          <div className="order-title">{order.title}</div>
          <img className="order-img" src={order.image} style={{width: "200px", height: "auto"}} alt="product-img"></img>
          <div className="order-price">€{props.formatPriceValue(order.price)}</div>
          <div className="order-size">{order.size}</div>
          <div className="order-quantity">{order.quantity}</div>
          <button className="update-quantity" onClick={props.incrementQuantityOrderItem.bind(this)}>Icrement quantity</button>
          <button className="update-quantity" onClick={props.decrementQuantityOrderItem.bind(this)}>Decrement quantity</button>
          <div className="subtotal-product">€{props.formatPriceValue(order.price*order.quantity)}</div>
          <button className="delete-from-cart" onClick={props.deleteOrderItem.bind(this)}>Remove</button>
        </div>
      ))}
      <div className="order-summary">
        <div className="order-summary-title">Order Summary</div>
        <div className="subtotal">
          <div className="subtotalAmount">Subtotal({props.subtotalAmountOfProducts})</div>
        <div className="subtotalPrice">€{props.formatPriceValue(subtotalPrice)}</div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
