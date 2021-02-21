import React from 'react';
import '../styles/ShopDetails.scss';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const ShopDetails = (props) => {
  const { url } = useRouteMatch();
  const products = props.products;

  return (
    <div>
      <div className="shop-details">ShopDetails</div>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`${url}/${product.id}`}>
            <img className="product-img" src={product.image} style={{width: "200px", height: "auto"}} alt="product-img"></img>
            <h1 className="product-title">{product.title}</h1>
            <h2 className="product-price">€{product.price.toFixed(2).replace('.', ',')}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ShopDetails;
