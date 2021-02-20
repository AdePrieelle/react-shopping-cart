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
  // console.log("render cart")
  return (
    <div>
      <div className="cart">Cart</div>
      {props.order.map((order, index) => (
        <div key={order.id} id={index}>
          <div className="order-title">{order.title}</div>
          <img className="order-img" src={order.image} style={{width: "200px", height: "auto"}} alt="product-img"></img>
          <div className="order-price">€{order.price.toFixed(2).replace('.', ',')}</div>
          <div className="order-quantity">{order.quantity}</div>
          {/* <input className="order-quantity" onChange={props.setQuanitityOrderItem.bind(this)} value={order.quantity} type="number" min="1" step="1"></input> */}
          {/* <select name="quantity" onChange={props.setQuanitityOrderItem.bind(this)} value={order.quantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select> */}

          <button className="update-quantity" onClick={props.incrementQuantityOrderItem.bind(this)}>Icrement quantity</button>
          <button className="update-quantity" onClick={props.decrementQuantityOrderItem.bind(this)}>Decrement quantity</button>
          <div className="subtotal-product">€{(order.price*order.quantity).toFixed(2).replace('.', ',')}</div>
          <button className="delete-from-cart" onClick={props.deleteOrderItem.bind(this)}>Remove</button>
        </div>
      ))}
      <div className="order-summary">
        <div className="order-summary-title">Order Summary</div>
        <div className="subtotal">
          <div className="subtotalAmount">Subtotal({subtotalAmountOfProducts})</div>
        <div className="subtotalPrice">€{subtotalPrice.toFixed(2).replace('.', ',')}</div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
