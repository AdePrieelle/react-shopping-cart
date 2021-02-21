import React, { useState, useEffect } from 'react';
import '../styles/ProductDetails.scss';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
  // console.log("Mount ProductDetails--------------")

  const { productId } = useParams();
  const products = props.products;
  const product = products[productId - 1];
  // console.log("product below---")
  // console.log(product);
  // new
  // const [productItem, setProductItem] = useState(product);

  // const theOrder = props.order;
  // console.log(theOrder);
  // old
  const selectSize = (e) => {
    let selectedSize = e.target.value;
    product.size = selectedSize;
  }

  // new
  // const selectSize = (e) => {
  //   let selectedSize = e.target.value;
  //   const clonedProduct = productItem;
  //   clonedProduct.size = selectedSize;
  //   setProductItem(clonedProduct);
  // }

  return (
    <div>
      <div className="product-details">ProductDetails</div>
      <div className="product-title">{product.title}</div>
      <div className="product-price">€{product.price.toFixed(2).replace('.', ',')}</div>
      <img className="product-img" src={product.image} style={{width: "200px", height: "auto"}} alt="product-img"></img>
      <div className="product-gender">category: {product.gender}</div>
      <select name="size" id="size" defaultValue="M" className="product-size" onChange={selectSize.bind(this)}>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <button onClick={props.addOrder.bind(this, product)}>Add</button>
    </div>
  )
}

export default ProductDetails;
