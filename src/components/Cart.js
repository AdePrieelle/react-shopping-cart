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
      <div className="cart-items-amount">Your Bag ({props.subtotalAmountOfProducts})</div>
      

      {props.order.length > 0 &&
      props.order.map((order, index) => (
        <div key={index} id={index} className="order-item">
          <div className="order-title-wrapper order-title-wrapper-1">
            <Link to={`/shop/${order.gender}/${order.id}`}>
              <div className="order-title">{order.title}</div>
            </Link>
          </div>
          <div className="order-details">
            <div className="order-img-wrapper">
              <Link to={`/shop/${order.gender}/${order.id}`}>
                {/* <div className="order-title">{order.title}</div> */}
                <img className="order-img" src={order.image} alt="product-img"></img>
              </Link>
            </div>
            <div className="order-item-details">
              {/* <div className="order-items-details-info"> */}
              <div className="order-title-wrapper order-title-wrapper-2">
                <Link to={`/shop/${order.gender}/${order.id}`}>
                  <div className="order-title">{order.title}</div>
                </Link>
              </div>
                <div className="order-size">Size: {order.size}</div>
                <div className="order-quantity-update-wrapper">
                  <div className="order-quantity-title">Qty:</div>
                  {/* <button className="update-quantity" onClick={props.decrementQuantityOrderItem.bind(this)}>-</button> */}
                  <i className="fas fa-minus update-quantity" id={index} onClick={props.decrementQuantityOrderItem.bind(this)}></i>
                  <div className="order-quantity">{order.quantity}</div>
                  <i className="fas fa-plus update-quantity" id={index} onClick={props.incrementQuantityOrderItem.bind(this)}></i>
                  {/* <button className="update-quantity" onClick={props.incrementQuantityOrderItem.bind(this)}>+</button> */}
                </div>
                <div className="subtotal-product">{props.formatPriceValue(order.price*order.quantity)}</div>
                {/* <div className="order-price">{props.formatPriceValue(order.price)}</div> */}
              {/* </div> */}
              <div className="delete-from-cart" id={index} onClick={props.deleteOrderItem.bind(this)}>Remove</div>
            </div>
          </div>
          <div className="divide-line"></div>
        </div>
      ))
      }

      {props.order.length > 0 &&
      <div className="order-summary">
        <div className="order-summary-title">Order Summary</div>
        <div className="subtotal">
          <div className="subtotalAmount">Subtotal({props.subtotalAmountOfProducts})</div>
        <div className="subtotalPrice">{props.formatPriceValue(subtotalPrice)}</div>
        </div>
      </div>
      }

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
    </div>
  )
}

export default Cart;
