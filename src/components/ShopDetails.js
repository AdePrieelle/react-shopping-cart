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

            <h1>{product.title}</h1>
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

