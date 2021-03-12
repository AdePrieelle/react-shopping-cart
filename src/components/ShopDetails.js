import React from 'react';
import '../styles/ShopDetails.scss';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const ShopDetails = (props) => {
  const { url } = useRouteMatch();
  const products = props.products;

  return (
    <div className="shop-details">
      <div className="shop-details-products">
        {products.map(product => (
          <div key={product.id} className="shop-details-product-item">
            <Link to={
              product.gender === "all" ? `${url}/${((props.productsAll.findIndex((productItem) => (productItem.id === product.id))) + 1)}`
            : product.gender === "women" ? `/shop/women/${((props.productsWomen.findIndex((productItem) => (productItem.id === product.id))) + 1)}`
            : product.gender === "men" ? `/shop/men/${((props.productsMen.findIndex((productItem) => (productItem.id === product.id))) + 1)}` 
            : null
            }>
              <img className="product-img" src={product.image} alt="product-img"></img>
              <div className="product-title-price-wrapper">
                <h1 className="product-title">{product.title}</h1>
                <h2 className="product-price">{props.formatPriceValue(product.price)}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopDetails;
