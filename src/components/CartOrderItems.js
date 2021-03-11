import React from 'react';
import '../styles/CartOrderItems.scss';
import { Link } from 'react-router-dom';
import AllProducts from './AllProducts';

const CartOrderItems = (props) => {
  const products = AllProducts;
  const productsAll = products.filter(product => (
    product.gender === "all"
  ))
  const productsMen = products.filter(product => (
    product.gender === "men"
  ))
  const productsWomen = products.filter(product => (
    product.gender === "women"
  ))

  return (
    <div className="order-items">
      {props.order.map((order, index) => (
        <div key={index} id={index} className="order-item">
          <div className="order-title-wrapper order-title-wrapper-1">
            <Link to={`/shop/${order.gender}/${
                order.gender === "all" ? ((productsAll.findIndex((productItem) => (productItem.id === order.id))) + 1)
              : order.gender === "women" ? ((productsWomen.findIndex((productItem) => (productItem.id === order.id))) + 1)
              : order.gender === "men" ? ((productsMen.findIndex((productItem) => (productItem.id === order.id))) + 1) : null
            }`}>
              <div className="order-title">{order.title}</div>
            </Link>
          </div>
          <div className="order-details">
            <div className="order-img-wrapper">
              <Link to={`/shop/${order.gender}/${
                  order.gender === "all" ? ((productsAll.findIndex((productItem) => (productItem.id === order.id))) + 1)
                : order.gender === "women" ? ((productsWomen.findIndex((productItem) => (productItem.id === order.id))) + 1)
                : order.gender === "men" ? ((productsMen.findIndex((productItem) => (productItem.id === order.id))) + 1) : null
              }`}>
                <img className="order-img" src={order.image} alt="product-img"></img>
              </Link>
            </div>
            <div className="order-item-details">
              <div className="order-title-wrapper order-title-wrapper-2">
                <Link to={`/shop/${order.gender}/${
                    order.gender === "all" ? ((productsAll.findIndex((productItem) => (productItem.id === order.id))) + 1)
                  : order.gender === "women" ? ((productsWomen.findIndex((productItem) => (productItem.id === order.id))) + 1)
                  : order.gender === "men" ? ((productsMen.findIndex((productItem) => (productItem.id === order.id))) + 1) : null
                }`}>
                  <div className="order-title">{order.title}</div>
                </Link>
              </div>
                <div className="order-size">Size: {order.size}</div>
                <div className="order-quantity-update-wrapper">
                  <div className="order-quantity-title">Qty:</div>
                  <i className="fas fa-minus update-quantity" id={index} onClick={props.decrementQuantityOrderItem.bind(this)}></i>
                  <div className="order-quantity">{order.quantity}</div>
                  <i className="fas fa-plus update-quantity" id={index} onClick={props.incrementQuantityOrderItem.bind(this)}></i>
                </div>
                <div className="subtotal-product">{props.formatPriceValue(order.price*order.quantity)}</div>
              <div className="delete-from-cart" id={index} onClick={props.deleteOrderItem.bind(this)}>Remove</div>
            </div>
          </div>
          <div className="divide-line"></div>
        </div>
      ))}
    </div>
  )
}

export default CartOrderItems;
