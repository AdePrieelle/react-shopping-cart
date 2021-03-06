import React, { useEffect } from 'react';
import '../styles/ProductDetails.scss';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
  const { productId } = useParams();
  const products = [...props.productsGender];
  // clone the product object on each component rerender to make sure no previous size is selected yet in product
  const product = Object.assign({}, products[productId - 1]);

  useEffect(() => {
    // set the product.size equal to the defaultChecked input radio value
    product.size = document.querySelector("input[name=size]:checked").value;
  });

  const selectSize = (e) => {
    // set the product.size to the selected input radio value
    let selectedSize = e.target.value;
    product.size = selectedSize;
  }

  return (
    <div className="product-details">
      <div className="product-title">{product.title}</div>
      <div className="product-img-wrapper">
        <img className="product-img" src={product.image} alt="product-img"></img>
      </div>
      <div className="product-price">{props.formatPriceValue(product.price)}</div>
      <div className="product-size" onChange={selectSize.bind(this)}>
        <input type="radio" name="size" id="XS" value="XS" />
        <label htmlFor="XS">XS</label>
        <input type="radio" name="size" id="S" value="S" />
        <label htmlFor="S">S</label>
        <input type="radio" name="size" id="M" value="M" defaultChecked />
        <label htmlFor="M">M</label>
        <input type="radio" name="size" id="L" value="L" />
        <label htmlFor="L">L</label>
        <input type="radio" name="size" id="XL" value="XL" />
        <label htmlFor="XL">XL</label>
        <input type="radio" name="size" id="XXL" value="XXL" />
        <label htmlFor="XXL">XXL</label>
      </div>
      <button onClick={props.addOrder.bind(this, product)}>Add to Bag</button>
    </div>
  )
}

export default ProductDetails;
