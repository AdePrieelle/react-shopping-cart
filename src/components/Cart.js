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
      {props.order.length > 0 &&
        <div className="cart-items-amount-order-item-summary-wrapper">
          <div className="cart-items-amount">Your Bag ({props.subtotalAmountOfProducts})</div>
          <div className="order-item-summary">
            <div className="order-item-wrapper">
              <CartOrderItems 
                order={props.order} 
                incrementQuantityOrderItem={props.incrementQuantityOrderItem}
                decrementQuantityOrderItem={props.decrementQuantityOrderItem}
                formatPriceValue={props.formatPriceValue}
                deleteOrderItem={props.deleteOrderItem}
              />
            </div>
            <CartOrderSummary 
              formatPriceValue={props.formatPriceValue}  
              subtotalAmountOfProducts={props.subtotalAmountOfProducts}
              subtotalPrice={subtotalPrice}
              shippingCosts={shippingCosts}
            />
          </div>
        </div>
      }
      
      {props.order.length === 0 && 
        <CartNoOrders />
      }
    </div>
  )
}

export default Cart;
