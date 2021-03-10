import React from 'react';
import '../styles/Cart.scss';
import CartOrderItems from './CartOrderItems';
import CartOrderSummary from './CartOrderSummary';
import CartNoOrders from './CartNoOrders';

const Cart = (props) => {
  const getSubtotalPrice = () => {
    let totalPrice = 0;
    props.order.map(order => (
      totalPrice += (order.price * order.quantity)
    ))
    return totalPrice;
  }

  const subtotalPrice = getSubtotalPrice();
  const shippingCosts = 9.9;

  return (
    <div className="cart">
      <div className="cart-items-amount">Your Bag ({props.subtotalAmountOfProducts})</div>
      <div className="order-item-summary">
        <div className="order-item-wrapper" style={{
          display: props.order.length === 0 && "flex", 
          flexDirection: props.order.length === 0 && "column", 
          justifyContent: props.order.length === 0 && "center", 
          alignItems: props.order.length === 0 && "center"
          }}>
          {props.order.length > 0 &&
            <CartOrderItems 
              order={props.order} 
              incrementQuantityOrderItem={props.incrementQuantityOrderItem}
              decrementQuantityOrderItem={props.decrementQuantityOrderItem}
              formatPriceValue={props.formatPriceValue}
              deleteOrderItem={props.deleteOrderItem}
            />
          }
          {props.order.length === 0 &&
            <CartNoOrders />
          }
        </div>
        <CartOrderSummary 
          formatPriceValue={props.formatPriceValue}  
          subtotalAmountOfProducts={props.subtotalAmountOfProducts}
          subtotalPrice={subtotalPrice}
          shippingCosts={shippingCosts}
        />
      </div>
    </div>
  )
}

export default Cart;
