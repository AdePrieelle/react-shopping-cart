import React from 'react';
import '../styles/CartOrderSummary.scss';

const CartOrderSummary = (props) => {
  return (
    <div className="order-summary">
      <div className="order-summary-title">Order Summary</div>
      <div className="subtotal">
        <div className="subtotalAmount">Subtotal ({props.subtotalAmountOfProducts})</div>
        <div className="subtotalPrice">{props.formatPriceValue(props.subtotalPrice)}</div>
      </div>
      <div className="order-shipping-costs">
        <div className="order-shipping-costs-title">Estimated Shipping (free over €100)</div>
        <div className="order-shipping-costs-price">
          {props.subtotalAmountOfProducts > 0 ? props.subtotalPrice >= 100 ? props.formatPriceValue(0) : props.formatPriceValue(props.shippingCosts) : "-"}
        </div>
      </div>
      <div className="divide-line"></div>
      <div className="order-estimated-total">
        <div className="order-estimated-total-title">Estimated Total</div>
        <div className="order-estimated-total-price">
          {props.subtotalAmountOfProducts > 0 ? props.subtotalPrice >= 100 ? props.formatPriceValue(props.subtotalPrice) : props.formatPriceValue(props.subtotalPrice + props.shippingCosts) : props.formatPriceValue(props.subtotalPrice)}
        </div>
      </div>
      <div className="checkout-button-wrapper">
        {props.subtotalAmountOfProducts > 0 &&
          <div className="checkout-button">Checkout</div>
        }
      </div>
    </div>
  )
}

export default CartOrderSummary;
