import React from 'react';
import '../styles/Cart.scss';

const Cart = (props) => {
  console.log("cart-------");
  console.log(props.order);
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
      {props.order.map((order, index) => (
        <div key={index} id={index}>
          <div className="order-title">{order.title}</div>
          <img className="order-img" src={order.image} style={{width: "200px", height: "auto"}} alt="product-img"></img>
          <div className="order-price">€{order.price.toFixed(2).replace('.', ',')}</div>
          <div className="order-size">{order.size}</div>
          <div className="order-quantity">{order.quantity}</div>
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
