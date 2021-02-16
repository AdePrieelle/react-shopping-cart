import React, { useState } from 'react';
import '../styles/Cart.scss';

const Cart = (props) => {
  // const allOrders = props.order;
  // console.log(allOrders);
  // allOrders.map(order => (
  //   // Object.assign(order, {quantity: 1})
  //   order.quantity = 1
  // ))

  // console.log(allOrders);
  // const [quantityOrder, setQuantityOrder] = useState(allOrders);
  let subtotalAmountOfProducts = 0;
  props.order.map(order => (
    subtotalAmountOfProducts += order.quantity
  ));

  let subtotalPrice = 0;
  props.order.map(order => (
    subtotalPrice += (order.price * order.quantity)
  ))

  return (
    <div>
      <div className="cart">Cart</div>
      {props.order.map(order => (
        <div key={order.id}>
          <div className="order-title">{order.title}</div>
          <div className="order-price">{order.price}</div>
          <div className="order-quantity">{order.quantity}</div>
        <div className="subtotal-product">{order.price*order.quantity}</div>
        </div>
      ))}
      <div className="order-summary">
        <div className="order-summary-title">Order Summary</div>
        <div className="subtotal">
          <div className="subtotalAmount">Subtotal({subtotalAmountOfProducts})</div>
        <div className="subtotalPrice">{subtotalPrice}</div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
