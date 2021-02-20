import React from 'react';
import '../styles/ShopDetails.scss';
import { Link } from 'react-router-dom';

// 1.
// import { withRouter } from 'react-router-dom';
// 2.
import { useRouteMatch } from 'react-router-dom';

const ShopDetails = (props) => {
  // 2.
  const { url } = useRouteMatch();

  const products = props.products;
  // console.log(products);
  // console.log(props.match);
  return (
    <div>
      <div className="shop-details">ShopDetails</div>
      {products.map(product => (
        <div key={product.id}>
          {/* 1. */}
          {/* <Link to={`${props.match.url}/${product.id}`}> */}
          {/* 2. */}
          <Link to={`${url}/${product.id}`}>
          {/* <Link to={`shop/${product.id}`}> */}
            <img className="product-img" src={product.image} style={{width: "200px", height: "auto"}} alt="product-img"></img>
            <h1 className="product-title">{product.title}</h1>
            <h2 className="product-price">€{product.price.toFixed(2).replace('.', ',')}</h2>
            {/* <div>{product.price}</div> */}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ShopDetails;
// 1.
// export default withRouter(ShopDetails);
